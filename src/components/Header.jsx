import React from 'react';

function Header() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  return(
    <div className="header">
      <h1>Currency Converter</h1>
      <p>Conversion rates accurate as of {today}</p>
    </div>
  )
}

export default Header;
