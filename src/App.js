// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
  
////// 2

//   function Welcome({ name }) {
//     return (
//     <section>
//     <h1>
//     Hello, <span>{name}</span> 🎉🎉
//     </h1>
//     </section>
//     );
//     } 
    
//     function withStyles(Component) {
//       return (props) => {
//       const style = {
//       color: "red",
//       fontSize: "1em",
//       // Merge props
//       ...props.style,
//       };
//       return <Component {...props} style={style} />;
//       };
//       } 

//       const Text = ({ style = {} }) => (
//         <p style={{ ...style, fontFamily: "Inter" }}>Hello world!</p>
//         ); // existing component
//         const StyledText = withStyles(Text); // new Component

//         function App() {
//           return (
//           <div className="App">
//           <Welcome name="Neo" />
//           <Text />
//           <StyledText />
//           </div>
//           );
//           }
          


//// 3

// function User({ name, pic }) {
//   return (
//   <section>
//   <img className="user-profile-pic" src={pic} alt={name} />
//   <h2 className="user-name">
//   Hello, <span className="user-first-name">{name}</span> 🎉🔥
//   </h2>
//   </section>
//   );
//  }
 
//  function App() {
//   const users = [
//     {
//       name: "Cuban",
//       pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
//     },
//     {
//       name: "Spencer",
//       pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
//     },
//     {
//       name: "Robert",
//       pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
//     },
//     {
//       name: "Einstein",
//       pic: "https://cdn.24h.com.vn/upload/3-2020/images/2020-07-31/dang-sau-su-thanh-cong-cua-Albert-Einstein-la-cach-giao-duc-doc-dao-nay-cua-nguoi-me-1-1596181025-522-width650height542.jpg",
//     },
//   ];
//   return (
//   <div className="App">
//   {users.map((usr) => (
//   <User name={usr.name} pic={usr.pic} />
//   ))}
//   </div>
//   );
//  }
 
// export default App;


//// 4

// import { useState } from 'react'
// function Game() {
//   let [count, setCount] = useState(0);
//   const startGame = () => {
//   console.log("Game is started");
//   setCount(count + 1);
//   };
//   return (
//   <div>
//   <h1>Game started {count} time</h1>
//   <StartGame onPlayerClick={startGame} />
//   </div>
//   );
//  }
//  function StartGame({ onPlayerClick }) {
//   return (
//   <div>
//   <button onClick={() => onPlayerClick()}>Start</button>
//   </div>
//   );
// }

//  export default Game;

 //// 5

 const USER_LIST = [
  {
    name: "Cuban",
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffee enthusiast.",
  },
  {
    name: "Spencer",
    pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Award-winning web lover. Thinker. Social media advocate. Creator. Bacon scholar. Zombie geek",
  },
  {
    name: "Robert",
    pic: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
    bio: "Professional communicator. Travel scholar. Friendly music junkie. Hardcore zombie aficionado",
  },
  {
    name: "Einstein",
    pic: "https://cdn.24h.com.vn/upload/3-2020/images/2020-07-31/dang-sau-su-thanh-cong-cua-Albert-Einstein-la-cach-giao-duc-doc-dao-nay-cua-nguoi-me-1-1596181025-522-width650height542.jpg",
    bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker. Pop culture evangelist",
  },
];
 function App() {
  const users = USER_LIST;
  return (
  <div className="App">
  <UserList users={users} />
  </div>
  );
 }
 function UserList({ users }) {
  return (
  <div className="user-list-container">
  {users.map((usr) => (
  <User name={usr.name} pic={usr.pic} />
  ))}
  </div>
  );
 }
 function User({ name, pic }) {
  return (
  <section className="user-container">
  <img className="user-profile-pic" src={pic} alt={name} />
  <h2 className="user-name">
  Hello, <span className="user-first-name">{name}</span> 🎉🔥
  </h2>
  </section>
  );
 }

  export default App;
