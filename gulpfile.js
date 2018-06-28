'use strict';
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const spritesmith = require('gulp.spritesmith');
const htmlbeautify = require('gulp-html-beautify');
const glob = require('glob');
const changed = require('gulp-changed');
const nunjucks = require('gulp-nunjucks-render');
const imageResize = require('gulp-image-resize');

var config = {
	device: 'mobile',
	sprite_src: 'src/sprite/',
	sprite_dest: 'src/img/',
	css_src: 'src/scss/',
	css_dest: 'src/css/',
	layout_src: 'src',
	layout_dest: 'dist',
};

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

gulp.task('watch', ['nunjucks_watch', 'asset_watch', 'scss_watch', 'sprite_watch']);
gulp.task('sprite', ['makeSprite', 'makeSpriteMap']);
gulp.task('dev', ['sprite', 'sass', 'watch']);

gulp.task('makeSprite', function () {
	var stream_arr = [];
	var options = {
		spritesmith: function (folder) {
			return {
				imgPath: path.posix.relative(config.css_dest, path.posix.join(config.sprite_dest, 'sp_' + folder + '.png')),
				imgName: 'sp_' + folder + '.png',
				cssName: '_sp_' + folder + '.scss',
				cssFormat: 'scss',
				padding: 6,
				cssTemplate: './gulpconf/sprite_template.hbs',
				cssSpritesheetName: 'sp_' + folder
			}
		}
	};

	getFolders(config.sprite_src).map(function (folder) {
		var spriteData = gulp.src(path.join(config.sprite_src, folder, '*.png'))
			.pipe(spritesmith(options.spritesmith(folder)));
		stream_arr.push(new Promise(function (resolve) {
			spriteData.img
				.pipe(gulp.dest(config.sprite_dest))
				.on('end', resolve);
		}));
		stream_arr.push(new Promise(function (resolve) {
			spriteData.css
				.pipe(gulp.dest(path.join(config.css_src, 'sprite')))
				.on('end', resolve);
		}));
	});
	return Promise.all(stream_arr);
});

gulp.task('makeSpriteMap', ['makeSprite'], function () {
	return gulp.src('gulpconf/sprite_maps_template.hbs')
		.pipe(handlebars({
			prefix: 'sp_',
			path: path.posix.relative(path.posix.join(config.css_src, 'import'), path.posix.join(config.css_src, 'sprite')),
			import: getFolders(config.sprite_src),
			ratio: (config.device == 'pc') ? 1 : 3
		}))
		.pipe(rename('_sprite_maps.scss'))
		.pipe(gulp.dest(path.join(config.css_src, 'import')));
});

gulp.task('sass', function () {
	return gulp.src(path.join(config.css_src, '**/*.scss'))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.css_dest));
});

// img, css modify dest
gulp.task('asset', function () {
	return gulp.src([path.join(config.layout_src, '**/*.+(css|jpg|png|gif|js)')])
		.pipe(gulp.dest(config.layout_dest))
})

var beautify_options = {
	"indent_size": 4,
	"max_preserve_newlines": 1,
	"end_with_newline": false,
};

gulp.task('nunjucks', function () {
	var includeDirs = [path.join(config.layout_src, '**/template'), path.join(config.layout_src, 'include'), path.join(config.layout_src, 'common_include'), path.join(config.layout_src, '**/inc'), path.join(config.layout_src, 'common_template'), path.join(config.layout_src, 'include_partial'), path.join(config.layout_src, 'common_js')]
	return gulp.src([path.join(config.layout_src, 'html/*.html')])
		.pipe(changed(config.layout_dest))
		.pipe(nunjucks({
			envOptions: {
				autoescape: false
			},
			path: includeDirs.reduce(function (dirs, g) {
				return dirs.concat(glob.sync(g));
			}, []),
		}).on('error', function (e) { console.log('Error! Check file : ' + e.fileName); }))
		.pipe(htmlbeautify({
			"indent_size": 4,
			"max_preserve_newlines": 1,
			"end_with_newline": false
		}))
		.pipe(gulp.dest(config.layout_dest));
});

gulp.task('beautify', function () {
	return gulp.src([path.join(config.layout_dest, '**/*.html')])
		.pipe(htmlbeautify(beautify_options))
		.pipe(gulp.dest(config.layout_dest))
})

gulp.task('nunjucks_watch', function () {
	gulp.watch([path.join(config.layout_src, 'html/*.html')], ['nunjucks']).on('change', function (event) {
		if (event.type === 'deleted') {
			var filePathFromSrc = path.relative(path.resolve(config.layout_src), event.path);
			var destFilePath = path.resolve(config.layout_dest, filePathFromSrc);
			del.sync(destFilePath);
		}
	});
})

gulp.task('asset_watch', function () {
	gulp.watch([path.join(config.layout_src, '**/*.+(css|jpg|png|gif|js)')], ['asset']).on('change', function (event) {
		if (event.type === 'deleted') {
			var filePathFromSrc = path.relative(path.resolve(config.layout_src), event.path);
			var destFilePath = path.resolve(config.layout_dest, filePathFromSrc);
			del.sync(destFilePath);
		}
	});
})

gulp.task('scss_watch', function () {
	gulp.watch([path.join(config.css_src, '/**/*')], ['sass']);
})

gulp.task('sprite_watch', function () {
	gulp.watch([path.join(config.sprite_src, '/**/*')], ['sprite']);
})

gulp.task('build', function () {
	gulp.task('build', ['nunjucks', 'beautify', 'asset', 'index'])
})

gulp.task('img_resize', function () {
	gulp.src('src/img/sp_w_layout.png')
		.pipe(imageResize({
			percentage: 50
		}))
		.pipe(rename('sp_w_layout_x1.png'))
		.pipe(gulp.dest('src/img/'));
});

gulp.task("clean", function () {
	return del(["dist/*.js", "dist/*.css", "dist/components/", "dist/containers/", "dist/contexts/", "dist/pages/", "dist/css/import/", "dist/css/fa-brands.css", "dist/css/fa-regular.css", "dist/css/fa-solid.css", "dist/css/fontawesome.css", "dist/css/v4-shims.css"], { force: true });
});
