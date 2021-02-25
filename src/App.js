import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import InputRow from './components/InputRow';
import Footer from './components/Footer';

function App() {
  const [currencyData, setCurrencyData] = useState([]);

  const APIurl = 'https://data.fixer.io/api/latest?access_key=' + process.env.REACT_APP_API_KEY;

  fetch(APIurl)
  .then(res => res.json())
  .then((data) => {
    setCurrencyData(data.rates);
  })
  .catch(console.log);

  const [row1, setRow1] = useState({
    value: 0,
    currency: "USD"
  });
  const [row2, setRow2] = useState({
    value: 0,
    currency: "EUR"
  });

  function update1(event) {
    const { value, className } = event.target;
    setRow1(prevValue => {
      if (className === "numberInput") {
        return {
          value: value,
          currency: prevValue.currency
        };
      } else if (className === "countryInput") {
        return {
          value: prevValue.value,
          currency: value
        }
      }
    });
    setRow2(prevValue => {
      var value2 = 0;
      if (className === "numberInput") {
        value2 = value * currencyData[row2.currency] / currencyData[row1.currency]
      } else if (className === "countryInput") {
        value2 = row1.value * currencyData[row2.currency] / currencyData[value]
      }
      return {
        value: value2,
        currency: prevValue.currency
      }
    })
  }

  function update2(event) {
    const { value, className } = event.target;
    setRow2(prevValue => {
      if (className === "numberInput") {
        return {
          value: value,
          currency: prevValue.currency
        };
      } else if (className === "countryInput") {
        return {
          value: prevValue.value,
          currency: value
        }
      }
    });
    setRow1(prevValue => {
      var value1 = 0;
      if (className === "numberInput") {
        value1 = value * currencyData[row1.currency] / currencyData[row2.currency]
      } else if (className === "countryInput") {
        value1 = row1.value * currencyData[row1.currency] / currencyData[value]
      }
      return {
        value: value1,
        currency: prevValue.currency
      }
    })
  }


  return (
    <div className="App">
      <Header />
      <InputRow
        value={row1.value}
        currency={row1.currency}
        change={update1}
        countries={Object.keys(currencyData)}
      />
      <InputRow
        value={row2.value}
        currency={row2.currency}
        change={update2}
        countries={Object.keys(currencyData)}
      />
      <Footer />
    </div>
  );
}

export default App;
