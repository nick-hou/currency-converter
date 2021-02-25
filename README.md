## Currency Converter App

This project was initialized with create-react-app and [hosted on Heroku](https://nhou-currency-converter.herokuapp.com/). Just some practice in React and API calls.

This app is intended to mimic [Google's currency converter](https://www.ehowportal.com/wp-content/uploads/2014/11/Euros-to-Dollars.png), which has two rows that continuously update each other.

On loading, the app makes a single fetch to [fixer.io](https://fixer.io/)'s API to get the latest rates for all 170 currencies. After that, all processes are completely on the client side.

Values and currencies are stored as (functional) states, with an onChange function to update the other row whenever any changes are made. Since setState() in React is an asynchronous function, the onChange functions use the event target value to improve responsiveness, while the states update.
