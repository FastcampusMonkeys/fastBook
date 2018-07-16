(function() {
  let isResizing = false;
  const elContainer = document.getElementById('container'),
    elLeft = document.querySelector('.memo-side'),
    elRight = document.querySelector('.memo-contents'),
    elbody = document.querySelector('body'),
    elHandle = document.getElementById('drag');
  elHandle.onmousedown = function(e) {
    isResizing = true;
    elbody.classList.add('no-drag');
  };
  document.onmousemove = function(e) {
    if (!isResizing) {
      return;
    }
    const offsetRight =
      elContainer.clientWidth - (e.clientX - elContainer.offsetLeft);
    elLeft.style.width = elContainer.clientWidth - offsetRight + 'px';
    elRight.style.left = elContainer.clientWidth - offsetRight + 'px';
  };
  elHandle.onmouseup = function(e) {
    if (e.clientX < 220) {
      elLeft.style.width = '220px';
      elRight.style.left = '220px';
    } else if (e.clientX > 320) {
      elLeft.style.width = '320px';
      elRight.style.left = '320px';
    }
    if (e.clientX < 80) {
      elLeft.style.width = '0px';
      elRight.style.left = '0px';
    }
    elbody.classList.remove('no-drag');
    isResizing = false;
  };
})();
