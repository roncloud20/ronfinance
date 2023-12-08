// CryptoPriceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPriceList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch top 20 crypto data from CoinGecko API
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 20,
            page: 1,
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    // Fetch data initially
    fetchCryptoData();

    // Set up WebSocket connection for real-time updates
    const ws = new WebSocket('wss://stream.coinmarketcap.com/price/latest');
    ws.onmessage = event => {
      const updatedCryptoData = JSON.parse(event.data);
      setCryptoData(prevData => {
        // Update the matching crypto data with the new real-time price
        return prevData.map(crypto => {
          const updatedCrypto = updatedCryptoData.find(updated => updated.id === crypto.id);
          if (updatedCrypto) {
            return { ...crypto, current_price: updatedCrypto.price };
          }
          return crypto;
        });
      });
    };

    // Close WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  const getArrowIcon = (change) => {
    if (change > 0) {
      return '🔼'; // Up arrow
    } else if (change < 0) {
      return '🔽'; // Down arrow
    } else {
      return '➡️'; // Right arrow (no change)
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="crypto-price-list-container">
      <ul className="crypto-price-list">
        {cryptoData.map(crypto => (
          <li key={crypto.id} className="crypto-item">
            | <span className={crypto.price_change_percentage_24h > 0 ? 'green' : 'red'}>
              {crypto.name}: {formatPrice(crypto.current_price)} {getArrowIcon(crypto.price_change_percentage_24h)}{' '}
              ({crypto.price_change_percentage_24h.toFixed(2)}%)
            </span> |
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoPriceList;


// // CryptoPriceList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceList = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     // Fetch top 20 crypto data from CoinGecko API
//     const fetchCryptoData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//             per_page: 20,
//             page: 1,
//           },
//         });
//         setCryptoData(response.data);
//       } catch (error) {
//         console.error('Error fetching crypto data:', error);
//       }
//     };

//     // Fetch data initially
//     fetchCryptoData();

//     // Set up WebSocket connection for real-time updates
//     const ws = new WebSocket('wss://stream.coinmarketcap.com/price/latest');
//     ws.onmessage = event => {
//       const updatedCryptoData = JSON.parse(event.data);
//       setCryptoData(prevData => {
//         // Update the matching crypto data with the new real-time price
//         return prevData.map(crypto => {
//           const updatedCrypto = updatedCryptoData.find(updated => updated.id === crypto.id);
//           if (updatedCrypto) {
//             return { ...crypto, current_price: updatedCrypto.price };
//           }
//           return crypto;
//         });
//       });
//     };

//     // Close WebSocket connection when the component unmounts
//     return () => {
//       ws.close();
//     };
//   }, []);

//   const getArrowIcon = (change) => {
//     if (change > 0) {
//       return '🔼'; // Up arrow
//     } else if (change < 0) {
//       return '🔽'; // Down arrow
//     } else {
//       return '➡️'; // Right arrow (no change)
//     }
//   };

//   return (
//     <div className="crypto-price-list-container">
//       <ul className="crypto-price-list">
//         {cryptoData.map(crypto => (
//           <li key={crypto.id} className="crypto-item">
//             | <span className={crypto.price_change_percentage_24h > 0 ? 'green' : 'red'}>
//               {crypto.name}: ${crypto.current_price} {getArrowIcon(crypto.price_change_percentage_24h)}{' '}
//               ({crypto.price_change_percentage_24h.toFixed(2)}%)
//             </span> |
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CryptoPriceList;


// // CryptoPriceList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceList = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     // Fetch top 20 crypto data from CoinGecko API
//     axios
//       .get('https://api.coingecko.com/api/v3/coins/markets', {
//         params: {
//           vs_currency: 'usd',
//           order: 'market_cap_desc',
//           per_page: 20,
//           page: 1,
//         },
//       })
//       .then(response => {
//         setCryptoData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching crypto data:', error);
//       });
//   }, []);

//   const getArrowIcon = (change) => {
//     if (change > 0) {
//       return '🔼'; // Up arrow
//     } else if (change < 0) {
//       return '🔽'; // Down arrow
//     } else {
//       return '➡️'; // Right arrow (no change)
//     }
//   };

//   return (
//     <div className="crypto-price-list-container">
//       <ul className="crypto-price-list">
//         {cryptoData.map(crypto => (
//           <li key={crypto.id} className="crypto-item">
//             <span className={crypto.price_change_percentage_24h > 0 ? 'green' : 'red'}>
//               {crypto.name}: ${crypto.current_price} {getArrowIcon(crypto.price_change_percentage_24h)}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CryptoPriceList;


// CryptoPriceList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceList = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     // Fetch top 20 crypto data from CoinGecko API
//     axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//       params: {
//         vs_currency: 'usd',
//         order: 'market_cap_desc',
//         per_page: 200,
//         page: 1,
//       },
//     })
//       .then(response => {
//         setCryptoData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching crypto data:', error);
//       });
//   }, []);

//   return (
//     <div className="crypto-price-list-container">
//       <ul className="crypto-price-list">
//         {cryptoData.map(crypto => (
//           <li key={crypto.id} className="crypto-item">
//             {crypto.name}: ${crypto.current_price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CryptoPriceList;


// // CryptoPriceList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceList = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     // Fetch crypto data from CoinGecko API
//     axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//       params: {
//         vs_currency: 'usd', // You can change the currency if needed
//         ids: 'bitcoin,ethereum,ripple', // Add more cryptocurrency IDs as needed
//       },
//     })
//       .then(response => {
//         setCryptoData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching crypto data:', error);
//       });
//   }, []);

//   return (
//     <div className="crypto-price-list">
//       <ul>
//         {cryptoData.map(crypto => (
//           <li key={crypto.id}>
//             {crypto.name}: ${crypto.current_price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CryptoPriceList;