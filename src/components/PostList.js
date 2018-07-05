import React from 'react';
import PostItem from './PostItem';
import PostForm from '../components/PostForm';
import SearchForm from './SearchForm';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import debounce from 'lodash.debounce';

let password;
export default class PostList extends React.Component {
  state = {
    textAreaValue: '',
    id: '',
    privateMode: '',
    searchStr: '',
    keyword: '',
    password: '',
    posts: [],
  };

  locking = () => {
    password = prompt('당신의 password 입력하시오');
    // this.setState({ password: lockPassWord });
    this.props.privatePosts(this.state.id);
  };

  unLocking = e => {
    const unLockPassWord = prompt('당신의 password 입력하시오', password);
    if (unLockPassWord === password) {
      this.props.unPrivatePosts(this.state.id);
      this.setState({ privateMode: false });
    } else {
      alert('비밀번호가 다릅니다');
    }
  };

  handleChangeView = e => {
    this.setState({
      textAreaValue: e.target.value,
    });
    const autoSavePost = debounce(this.onUpdate, 2000);
    autoSavePost();
  };

  onUpdate = () => {
    this.props.updatePosts(this.state.id, this.state.textAreaValue);
  };
  idComunity = (id, body, privateMode) => {
    this.setState({
      textAreaValue: body,
      id,
      privateMode,
    });
  };

  render() {
    const { posts, deletePosts, privatePosts, createPosts } = this.props;
    const svgStyle = {
      fill: '#fff',
    };
    return (
      <React.Fragment>
        <section id="wrap">
          <header className="header">
            <h1 className="title">
              <span className="blind">FASTBOOK</span>
              <svg className="svg">
                <g style={svgStyle}>
                  <path d="M0.109,23.381V0.432h12.357v2.236h-9.65v7.649h7.296v2.236H2.816v10.827H0.109z" />
                  <path
                    d="M16.938,23.381h-2.824l5.884-22.948h2.354l5.884,22.948h-2.824l-1.648-6.708h-5.178L16.938,23.381z
            M21.293,6.67h-0.235l-1.883,7.767h4.001L21.293,6.67z"
                  />
                  <path
                    d="M39.769,12.554c1.804,1.02,2.707,2.512,2.707,4.472c0,1.961-0.588,3.531-1.765,4.707
            c-1.1,1.1-2.63,1.648-4.59,1.648c-1.883,0-3.336-0.51-4.354-1.53c-1.255-1.254-1.883-2.746-1.883-4.472v-1.177h2.707v1.059
            c0,1.255,0.313,2.197,0.941,2.824c0.628,0.629,1.412,0.941,2.354,0.941c1.254,0,2.196-0.313,2.824-0.941
            c0.706-0.706,1.059-1.607,1.059-2.707c0-1.177-0.549-2.118-1.648-2.824c-1.961-1.254-3.806-2.589-5.531-4.001
            c-1.255-1.019-1.923-2.393-2.001-4.119c-0.078-1.725,0.51-3.177,1.765-4.354c1.177-1.098,2.471-1.648,3.884-1.648
            c1.725,0,3.06,0.471,4.001,1.412c1.177,1.177,1.725,2.824,1.648,4.943h-2.707c0.157-1.334-0.158-2.393-0.941-3.177
            c-0.549-0.548-1.217-0.824-2.001-0.824c-0.785,0-1.453,0.276-2.001,0.824c-0.706,0.706-1.059,1.53-1.059,2.471
            c0,1.02,0.548,2.001,1.648,2.942C36.474,10.435,38.121,11.612,39.769,12.554z"
                  />
                  <path d="M49.772,23.381V13.025V2.668h-4.59V0.432h12.122v2.236h-4.825v20.712H49.772z" />
                  <path
                    d="M70.485,1.845c1.177,1.177,1.765,2.589,1.765,4.237c0,1.491-0.432,2.668-1.295,3.531
            c-0.706,0.706-1.295,1.138-1.765,1.295c0.863,0.471,1.569,0.982,2.118,1.53c1.019,1.02,1.53,2.432,1.53,4.237
            c0,1.961-0.511,3.453-1.53,4.472c-1.491,1.491-3.218,2.236-5.178,2.236h-5.884V0.432h6.12C68.17,0.432,69.543,0.903,70.485,1.845z
            M68.719,8.67c0.706-0.706,1.059-1.569,1.059-2.589c0-1.019-0.276-1.804-0.824-2.354c-0.706-0.706-1.412-1.059-2.118-1.059h-3.884
            v6.943h3.531C67.346,9.612,68.091,9.299,68.719,8.67z M62.953,11.848v9.297h2.707c1.334,0,2.471-0.471,3.413-1.412
            c0.783-0.783,1.177-1.804,1.177-3.06c0-1.412-0.432-2.549-1.295-3.413c-0.941-0.941-1.883-1.412-2.824-1.412H62.953z"
                  />
                  <path
                    d="M87.902,11.848c0,4.943-0.864,8.278-2.589,10.003c-1.02,1.02-2.314,1.53-3.884,1.53
            c-1.648,0-2.983-0.51-4.001-1.53c-1.726-1.725-2.589-5.06-2.589-10.003c0-4.864,0.863-8.159,2.589-9.885
            c1.019-1.019,2.354-1.53,4.001-1.53c1.569,0,2.864,0.511,3.884,1.53C87.038,3.688,87.902,6.983,87.902,11.848z M77.546,11.848
            c0,4.472,0.51,7.219,1.53,8.238c0.706,0.706,1.489,1.059,2.354,1.059c0.783,0,1.53-0.353,2.236-1.059
            c1.019-1.019,1.53-3.766,1.53-8.238c0-4.394-0.511-7.1-1.53-8.12c-0.706-0.706-1.453-1.059-2.236-1.059
            c-0.864,0-1.648,0.353-2.354,1.059C78.056,4.747,77.546,7.454,77.546,11.848z"
                  />
                  <path
                    d="M102.966,11.848c0,4.943-0.864,8.278-2.589,10.003c-1.02,1.02-2.314,1.53-3.884,1.53
            c-1.648,0-2.983-0.51-4.001-1.53c-1.726-1.725-2.589-5.06-2.589-10.003c0-4.864,0.863-8.159,2.589-9.885
            c1.019-1.019,2.354-1.53,4.001-1.53c1.569,0,2.864,0.511,3.884,1.53C102.101,3.688,102.966,6.983,102.966,11.848z M92.609,11.848
            c0,4.472,0.51,7.219,1.53,8.238c0.706,0.706,1.489,1.059,2.354,1.059c0.783,0,1.53-0.353,2.236-1.059
            c1.019-1.019,1.53-3.766,1.53-8.238c0-4.394-0.511-7.1-1.53-8.12c-0.706-0.706-1.453-1.059-2.236-1.059
            c-0.864,0-1.648,0.353-2.354,1.059C93.119,4.747,92.609,7.454,92.609,11.848z"
                  />
                  <path
                    d="M105.437,23.381V0.432h2.707v9.65l6.708-9.65h3.177l-6.237,9.062l6.708,13.887h-3.06l-5.413-11.651
            l-1.883,2.589v9.062H105.437z"
                  />
                </g>
              </svg>
            </h1>

            <div className="header-menu">
              <h2 className="blind">사용자 메뉴</h2>
                <ul className="header-menu__btns">
                  {/* <li>
                    <button type="button" className="header-menu__button-colums">
                      <i className="fas fa-columns" title="리스트 펼침/닫기">
                      <span className="blind">리스트 펼침/닫기</span>
                    </i>
                  </button>
                  </li> */}
                    <li>
                    <PostForm onCreate={createPosts} />
                    </li>
                    <li>
                      {this.state.privateMode ? (
                      <button type="button" onClick={this.unLocking}>
                        <i className="fas fa-unlock-alt" title="메모 잠금 해제">
                        <span className="blind">메모 잠금 해제</span>
                        </i>
                      </button>
                      ) : (
                        <button type="button" onClick={this.locking}>
                          <i className="fas fa-lock" title="메모 잠금">
                            <span className="blind">메모 잠금</span>
                          </i>
                        </button>
                      )}
                    </li>
                    <li>
                        <button type="button"
                            onClick={e => {
                              deletePosts(this.state.id);
                            }}
                          >
                            <i className="fas fa-trash-alt" title="메모 삭제">
                              <span className="blind">메모 삭제</span>
                            </i>
                        </button>
                    </li>
                    <li>
                      <button type="button">
                        <i className="fas fa-cog" title="정보 변경">
                        <span className="blind">정보 변경</span>
                        </i>
                        </button>
                    </li>
                    <li>
                          <LogoutBtnContainer />
                    </li>
                </ul>
                <SearchForm onSubmit={this.props.updateSearchStr} />
            </div>
          </header>

          <section id="container" className="container" role="main">
        <div className="memo-side">
          <h2 className="blind">메모 리스트</h2>
          <ul className="memo-side__list">
            {posts
              .map((post, i) => (
                <PostItem
                  key={post.id}
                  {...post}
                  deletePosts={deletePosts}
                  detailValue={this.detailValue}
                  updatePosts={this.updatePosts}
                  privatePosts={privatePosts}
                  itemindex={i}
                  idComunity={this.idComunity}
                />
              ))
              .reverse()}
          </ul>
        </div>
        <div className="memo-contents">
          <form className="memo-contents__form">
            <fieldset className="memo-contents__fieldset">
              <legend className="blind">메모 입력 폼</legend>
              <label htmlFor="contentTextarea" className="blind">내용</label>
              {this.state.privateMode ? (
                <div className="memo-contents__fieldset-textarea memo-contents__lock">
                  <p>
                    <i className="fas fa-lock"></i>
                    <strong>현재 메모는 잠겨있습니다.</strong>
                  </p>
                </div>
              ) : (
                <textarea
                  className={this.state.privateMode ? "memo-contents__fieldset-textarea disabled" : "memo-contents__fieldset-textarea"}
                  key={posts.id}
                  id="contentTextarea"
                  name="detailContent"
                  cols="30"
                  rows="10"
                  value={this.state.privateMode ? 'Lock' : this.state.textAreaValue}
                  onChange={this.handleChangeView}
                  placeholder="Write Here"
                />
              )}
              
            </fieldset>
          </form>
          <a id="drag"></a>
        </div>
          </section>
          <footer id="footer" role="contentinfo">
            <small className="footer_copyright">
              FASTMONKEYS All Right Reserved
            </small>
          </footer>
        </section>
      </React.Fragment>
    );
  }
}
