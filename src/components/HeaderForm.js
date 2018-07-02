// import React from 'react';

// export default class HeaderForm extends React.Component {
//   render() {
//     return (
//       <section id="wrap" className="login-section">

//         <header classname="header">

//           <div classname="blind">
//             <h1>
//               <span>FASTBOOK</span>
//             </h1>
//             <strong>
//               SAVE YOUR NOTES QUICKLY
//   </strong>
//           </div>
//           <div className="item-svg">
//             <svg>
//               <polygon className="st0" points="318.4,372 1.1,372 1.1,-0.1 249,-0.1 318.4,67.5 " />
//               <path className="st1" d="M56.8,175.1V83.6h42.6v8.9H66.2V123h25.2v8.9H66.2v43.2C66.2,175.1,56.8,175.1,56.8,175.1z" />
//               <path className="st1" d="M114.9,175.1h-9.7l20.3-91.5h8.1l20.3,91.5h-9.7l-5.7-26.8h-17.9L114.9,175.1z M129.9,108.4h-0.8l-6.5,31h13.8  L129.9,108.4z" />
//               <path className="st1" d="M193.6,131.9c6.2,4.1,9.3,10,9.3,17.8c0,7.8-2,14.1-6.1,18.8c-3.8,4.4-9.1,6.6-15.8,6.6c-6.5,0-11.5-2-15-6.1  c-4.3-5-6.5-11-6.5-17.8v-4.7h9.3v4.2c0,5,1.1,8.8,3.2,11.3c2.2,2.5,4.9,3.8,8.1,3.8c4.3,0,7.6-1.2,9.7-3.8  c2.4-2.8,3.7-6.4,3.7-10.8c0-4.7-1.9-8.5-5.7-11.3c-6.8-5-13.1-10.3-19.1-16c-4.3-4.1-6.6-9.5-6.9-16.4c-0.3-6.9,1.8-12.7,6.1-17.4  c4.1-4.4,8.5-6.6,13.4-6.6c5.9,0,10.5,1.9,13.8,5.6c4.1,4.7,5.9,11.3,5.7,19.7h-9.3c0.5-5.3-0.5-9.5-3.2-12.7  c-1.9-2.2-4.2-3.3-6.9-3.3c-2.7,0-5,1.1-6.9,3.3c-2.4,2.8-3.7,6.1-3.7,9.9c0,4.1,1.9,8,5.7,11.7  C182.2,123.5,187.9,128.2,193.6,131.9z" />
//               <path className="st1" d="M228.1,175.1v-41.3V92.5h-15.8v-8.9H254v8.9h-16.6v82.6C237.4,175.1,228.1,175.1,228.1,175.1z" />
//               <path className="st1" d="M91.7,188.2c4.1,4.7,6.1,10.3,6.1,16.9c0,5.9-1.5,10.6-4.5,14.1c-2.4,2.8-4.5,4.5-6.1,5.2  c3,1.9,5.4,3.9,7.3,6.1c3.5,4.1,5.3,9.7,5.3,16.9c0,7.8-1.8,13.8-5.3,17.8c-5.1,5.9-11.1,8.9-17.9,8.9H56.4v-91.5h21.1  C83.8,182.5,88.5,184.4,91.7,188.2z M85.7,215.4c2.4-2.8,3.7-6.3,3.7-10.3c0-4.1-1-7.2-2.8-9.4c-2.4-2.8-4.9-4.2-7.3-4.2H65.8v27.7  h12.2C80.9,219.1,83.5,217.9,85.7,215.4z M65.8,228.1v37.1h9.3c4.6,0,8.5-1.9,11.8-5.6c2.7-3.1,4.1-7.2,4.1-12.2  c0-5.6-1.5-10.2-4.5-13.6c-3.2-3.8-6.5-5.6-9.7-5.6L65.8,228.1L65.8,228.1z" />
//               <path className="st1" d="M151.8,228.1c0,19.7-3,33-8.9,39.9c-3.5,4.1-8,6.1-13.4,6.1c-5.7,0-10.3-2-13.8-6.1c-6-6.9-8.9-20.2-8.9-39.9  c0-19.4,3-32.5,8.9-39.4c3.5-4.1,8.1-6.1,13.8-6.1c5.4,0,9.9,2,13.4,6.1C148.8,195.5,151.8,208.7,151.8,228.1z M116.1,228.1  c0,17.8,1.8,28.8,5.3,32.9c2.4,2.8,5.1,4.2,8.1,4.2c2.7,0,5.3-1.4,7.7-4.2c3.5-4.1,5.3-15,5.3-32.9c0-17.5-1.8-28.3-5.3-32.4  c-2.4-2.8-5-4.2-7.7-4.2c-3,0-5.7,1.4-8.1,4.2C117.8,199.7,116.1,210.5,116.1,228.1z" />
//               <path className="st1" d="M203.7,228.1c0,19.7-3,33-8.9,39.9c-3.5,4.1-8,6.1-13.4,6.1c-5.7,0-10.3-2-13.8-6.1c-6-6.9-8.9-20.2-8.9-39.9  c0-19.4,3-32.5,8.9-39.4c3.5-4.1,8.1-6.1,13.8-6.1c5.4,0,9.9,2,13.4,6.1C200.7,195.5,203.7,208.7,203.7,228.1z M168,228.1  c0,17.8,1.8,28.8,5.3,32.9c2.4,2.8,5.1,4.2,8.1,4.2c2.7,0,5.3-1.4,7.7-4.2c3.5-4.1,5.3-15,5.3-32.9c0-17.5-1.8-28.3-5.3-32.4  c-2.4-2.8-5-4.2-7.7-4.2c-3,0-5.7,1.4-8.1,4.2C169.8,199.7,168,210.5,168,228.1z" />
//               <path className="st1" d="M212.2,274.1v-91.5h9.3V221l23.1-38.5h11l-21.5,36.1l23.1,55.4h-10.5l-18.7-46.5l-6.5,10.3v36.1L212.2,274.1  L212.2,274.1z" />
//               <path className="st1" d="M55.7,306.3v-1.7c0.2,0.2,0.4,0.3,0.7,0.5c0.3,0.1,0.5,0.2,0.8,0.3c0.3,0.1,0.6,0.2,0.8,0.2  c0.3,0,0.5,0.1,0.8,0.1c0.8,0,1.5-0.2,1.9-0.5c0.4-0.3,0.6-0.8,0.6-1.4c0-0.3-0.1-0.6-0.2-0.9c-0.1-0.2-0.3-0.5-0.6-0.7  c-0.2-0.2-0.5-0.4-0.9-0.6c-0.3-0.2-0.7-0.4-1.1-0.6c-0.4-0.2-0.8-0.4-1.1-0.6c-0.3-0.2-0.7-0.5-0.9-0.7c-0.3-0.3-0.5-0.6-0.6-0.9  c-0.1-0.3-0.2-0.7-0.2-1.2c0-0.6,0.1-1,0.3-1.4c0.2-0.4,0.5-0.7,0.9-1s0.8-0.5,1.3-0.6c0.5-0.1,1-0.2,1.5-0.2c1.1,0,2,0.1,2.5,0.4  v1.6c-0.7-0.5-1.6-0.7-2.6-0.7c-0.3,0-0.6,0-0.9,0.1c-0.3,0.1-0.6,0.2-0.8,0.3s-0.4,0.3-0.6,0.6c-0.1,0.2-0.2,0.5-0.2,0.8  c0,0.3,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.2,0.7,0.4,1.1,0.6c0.4,0.2,0.8,0.4,1.2,0.7  c0.4,0.2,0.7,0.5,1,0.8s0.5,0.6,0.7,1c0.2,0.3,0.2,0.7,0.2,1.2c0,0.6-0.1,1.1-0.3,1.5c-0.2,0.4-0.5,0.7-0.9,1  c-0.4,0.3-0.8,0.4-1.3,0.6c-0.5,0.1-1,0.2-1.6,0.2c-0.2,0-0.4,0-0.7,0s-0.5-0.1-0.8-0.1c-0.3-0.1-0.5-0.1-0.8-0.2  C56.1,306.5,55.9,306.4,55.7,306.3z" />
//               <path className="st1" d="M74,306.8h-1.5l-1.2-3.4h-4.9l-1.2,3.4h-1.5l4.4-12.1h1.4L74,306.8z M70.8,302.2L69,297  c-0.1-0.2-0.1-0.4-0.2-0.8h0c-0.1,0.3-0.1,0.6-0.2,0.8l-1.8,5.2H70.8z" />
//               <path className="st1" d="M83.3,294.7L79,306.8h-1.5l-4.2-12.1h1.5l3.2,9.6c0.1,0.3,0.2,0.7,0.2,1.1h0c0-0.3,0.1-0.7,0.3-1.1l3.3-9.6  H83.3L83.3,294.7z" />
//               <path className="st1" d="M91.1,306.8H85v-12.1h5.9v1.3h-4.5v4h4.2v1.3h-4.2v4.2h4.8V306.8z" />
//               <path className="st1" d="M104.1,294.7l-3.8,7.6v4.5H99v-4.4l-3.7-7.7h1.5l2.6,5.5c0,0.1,0.1,0.3,0.3,0.7h0c0.1-0.2,0.2-0.4,0.3-0.7  l2.7-5.5L104.1,294.7L104.1,294.7z" />
//               <path className="st1" d="M110,307c-1.6,0-2.9-0.6-3.9-1.7c-1-1.1-1.5-2.6-1.5-4.4c0-1.9,0.5-3.5,1.5-4.7c1-1.2,2.4-1.7,4.1-1.7  c1.6,0,2.9,0.6,3.9,1.7c1,1.1,1.5,2.6,1.5,4.4c0,2-0.5,3.5-1.5,4.7C113.1,306.4,111.7,307,110,307z M110.1,295.8  c-1.2,0-2.2,0.5-3,1.4c-0.8,0.9-1.1,2.1-1.1,3.6c0,1.5,0.4,2.7,1.1,3.6s1.7,1.4,2.9,1.4c1.3,0,2.3-0.4,3-1.3  c0.7-0.9,1.1-2.1,1.1-3.6c0-1.6-0.4-2.8-1.1-3.7C112.4,296.2,111.4,295.8,110.1,295.8z" />
//               <path className="st1" d="M126.3,301.9c0,3.4-1.5,5.1-4.4,5.1c-2.8,0-4.2-1.6-4.2-4.9v-7.4h1.4v7.3c0,2.5,1,3.7,3,3.7  c1.9,0,2.9-1.2,2.9-3.6v-7.4h1.4L126.3,301.9L126.3,301.9z" />
//               <path className="st1" d="M137.4,306.8h-1.6l-1.9-3.4c-0.2-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.1-0.4-0.2-0.6-0.3  c-0.2-0.1-0.4-0.1-0.7-0.1h-1.1v5.1h-1.4v-12.1h3.4c0.5,0,1,0.1,1.4,0.2c0.4,0.1,0.8,0.3,1.1,0.6c0.3,0.3,0.6,0.6,0.7,1  c0.2,0.4,0.3,0.9,0.3,1.4c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.5,0.9c-0.2,0.3-0.5,0.5-0.8,0.7c-0.3,0.2-0.7,0.3-1.1,0.5v0  c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.3,0.4,0.4c0.1,0.2,0.3,0.3,0.4,0.5c0.1,0.2,0.3,0.4,0.4,0.7L137.4,306.8z M130.5,296v4.4  h1.8c0.3,0,0.7-0.1,0.9-0.2c0.3-0.1,0.5-0.3,0.7-0.5s0.4-0.4,0.5-0.7c0.1-0.3,0.2-0.6,0.2-1c0-0.6-0.2-1.2-0.6-1.5  c-0.4-0.4-1-0.5-1.7-0.5L130.5,296L130.5,296z" />
//               <path className="st1" d="M151.6,306.8H150l-5.9-9.6c-0.1-0.2-0.3-0.5-0.4-0.8h0c0,0.3,0.1,0.8,0.1,1.7v8.7h-1.4v-12.1h1.8l5.8,9.5  c0.2,0.4,0.4,0.7,0.5,0.8h0c-0.1-0.3-0.1-0.9-0.1-1.8v-8.5h1.4C151.6,294.7,151.6,306.8,151.6,306.8z" />
//               <path className="st1" d="M159.3,307c-1.6,0-2.9-0.6-3.9-1.7c-1-1.1-1.5-2.6-1.5-4.4c0-1.9,0.5-3.5,1.5-4.7c1-1.2,2.4-1.7,4.1-1.7  c1.6,0,2.9,0.6,3.9,1.7c1,1.1,1.5,2.6,1.5,4.4c0,2-0.5,3.5-1.5,4.7C162.3,306.4,161,307,159.3,307z M159.4,295.8  c-1.2,0-2.2,0.5-3,1.4c-0.8,0.9-1.1,2.1-1.1,3.6c0,1.5,0.4,2.7,1.1,3.6s1.7,1.4,2.9,1.4c1.3,0,2.3-0.4,3-1.3  c0.7-0.9,1.1-2.1,1.1-3.6c0-1.6-0.4-2.8-1.1-3.7C161.7,296.2,160.7,295.8,159.4,295.8z" />
//               <path className="st1" d="M173.2,296h-3.3v10.8h-1.4V296h-3.3v-1.3h8V296z" />
//               <path className="st1" d="M181.1,306.8H175v-12.1h5.9v1.3h-4.5v4h4.2v1.3h-4.2v4.2h4.8V306.8z" />
//               <path className="st1" d="M182.8,306.3v-1.7c0.2,0.2,0.4,0.3,0.7,0.5c0.3,0.1,0.5,0.2,0.8,0.3c0.3,0.1,0.6,0.2,0.8,0.2  c0.3,0,0.5,0.1,0.8,0.1c0.8,0,1.5-0.2,1.9-0.5c0.4-0.3,0.6-0.8,0.6-1.4c0-0.3-0.1-0.6-0.2-0.9c-0.1-0.2-0.3-0.5-0.6-0.7  s-0.5-0.4-0.9-0.6c-0.3-0.2-0.7-0.4-1.1-0.6c-0.4-0.2-0.8-0.4-1.1-0.6c-0.3-0.2-0.7-0.5-0.9-0.7c-0.3-0.3-0.5-0.6-0.6-0.9  c-0.1-0.3-0.2-0.7-0.2-1.2c0-0.6,0.1-1,0.3-1.4c0.2-0.4,0.5-0.7,0.9-1s0.8-0.5,1.3-0.6c0.5-0.1,1-0.2,1.5-0.2c1.1,0,2,0.1,2.5,0.4  v1.6c-0.7-0.5-1.6-0.7-2.6-0.7c-0.3,0-0.6,0-0.9,0.1c-0.3,0.1-0.6,0.2-0.8,0.3s-0.4,0.3-0.6,0.6c-0.1,0.2-0.2,0.5-0.2,0.8  c0,0.3,0.1,0.6,0.2,0.8s0.3,0.4,0.5,0.6c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.2,0.7,0.4,1.1,0.6c0.4,0.2,0.8,0.4,1.2,0.7  c0.4,0.2,0.7,0.5,1,0.8s0.5,0.6,0.7,1c0.2,0.3,0.2,0.7,0.2,1.2c0,0.6-0.1,1.1-0.3,1.5c-0.2,0.4-0.5,0.7-0.9,1  c-0.4,0.3-0.8,0.4-1.3,0.6c-0.5,0.1-1,0.2-1.6,0.2c-0.2,0-0.4,0-0.7,0s-0.5-0.1-0.8-0.1c-0.3-0.1-0.5-0.1-0.8-0.2  C183.2,306.5,183,306.4,182.8,306.3z" />
//               <path className="st1" d="M200.1,307c-1.6,0-2.9-0.6-3.9-1.7c-1-1.1-1.5-2.6-1.5-4.4c0-2,0.5-3.5,1.5-4.7c1-1.2,2.4-1.7,4.1-1.7  c1.6,0,2.9,0.6,3.9,1.7c1,1.1,1.5,2.6,1.5,4.4c0,2-0.5,3.5-1.5,4.7c-0.2,0.3-0.5,0.5-0.8,0.7l3.2,2.4h-2.5l-2.2-1.7  C201.4,306.9,200.8,307,200.1,307z M200.2,295.8c-1.2,0-2.2,0.5-3,1.4c-0.8,0.9-1.1,2.1-1.1,3.6c0,1.5,0.4,2.7,1.1,3.6  c0.7,0.9,1.7,1.4,2.9,1.4c1.3,0,2.3-0.4,3-1.3c0.7-0.9,1.1-2.1,1.1-3.6c0-1.6-0.4-2.8-1.1-3.7C202.4,296.2,201.4,295.8,200.2,295.8z  " />
//               <path className="st1" d="M216.3,301.9c0,3.4-1.5,5.1-4.4,5.1c-2.8,0-4.2-1.6-4.2-4.9v-7.4h1.4v7.3c0,2.5,1,3.7,3,3.7  c1.9,0,2.9-1.2,2.9-3.6v-7.4h1.4L216.3,301.9L216.3,301.9z" />
//               <path className="st1" d="M220.6,306.8h-1.4v-12.1h1.4V306.8z" />
//               <path className="st1" d="M231.5,306.3c-0.9,0.5-1.9,0.7-3.2,0.7c-1.6,0-3-0.6-3.9-1.7c-1-1.1-1.5-2.6-1.5-4.4c0-1.9,0.6-3.5,1.7-4.7  c1.1-1.2,2.5-1.8,4.2-1.8c1.1,0,2,0.2,2.7,0.5v1.5c-0.8-0.5-1.7-0.7-2.7-0.7c-1.3,0-2.4,0.5-3.2,1.4c-0.8,0.9-1.2,2.2-1.2,3.7  c0,1.5,0.4,2.6,1.2,3.5c0.8,0.9,1.8,1.3,3,1.3c1.2,0,2.2-0.3,3-0.8L231.5,306.3L231.5,306.3z" />
//               <path className="st1" d="M241.8,306.8H240l-4.5-5.5c-0.2-0.2-0.3-0.3-0.3-0.4h0v6h-1.4v-12.1h1.4v5.7h0c0.1-0.1,0.2-0.3,0.3-0.4l4.3-5.3  h1.7l-5,5.8L241.8,306.8z" />
//               <path className="st1" d="M249.4,306.8h-6v-12.1h1.4v10.8h4.6V306.8z" />
//               <path className="st1" d="M257.6,294.7l-3.8,7.6v4.5h-1.4v-4.4l-3.7-7.7h1.5l2.6,5.5c0,0.1,0.1,0.3,0.3,0.7h0c0.1-0.2,0.2-0.4,0.3-0.7  l2.7-5.5L257.6,294.7L257.6,294.7z" />
//             </svg>
//           </div>
//         </header>
//       </section>
//     );
//   }
// }