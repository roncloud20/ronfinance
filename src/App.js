// // App.js
import './App.css';
// App.js
import React from 'react';
import CryptoPriceList from './Components/CryptoPriceList';

const App = () => {
  return (
    <div>
      <CryptoPriceList />
      {/* Rest of your application */}
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import CryptoPriceList from './Components/CryptoPriceList';

// const App = () => {
//   const [showCryptoList, setShowCryptoList] = useState(false);

//   const toggleCryptoList = () => {
//     setShowCryptoList(!showCryptoList);
//   };

//   return (
//     <div>
//       <button onClick={toggleCryptoList}>Toggle Crypto List</button>
//       <CryptoPriceList className={showCryptoList ? 'show' : ''} />
//       {/* Rest of your application */}
//     </div>
//   );
// };

// export default App;

// import logo from './logo.svg';
// import './App.css';

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

// export default App;
