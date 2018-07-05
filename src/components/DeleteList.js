// import React from 'react';

// // export default 는 값을 export하는거고 export 는 여러가지가 가능하다
// export default class DeleteListBtn extends React.Component {
//   static defaultProps = {
//     onCreate: () => { }, // 할일 추가 버튼 클릭시 호출되는 함수
//   };
//   state = {
//     textAreaValue: '',
//     id: ''
//   };

//   idComunity = (id, body) => {
//     this.setState({
//       textAreaValue: body,
//       id: id,
//     });
//   };

//   render() {
//     return (
//       <button
//         onClick={e => {
//           deletePosts(this.state.id);
//         }}
//       >
//         Delete
//         </button>
//     );
//   }
// }
