import React from 'react';
import '../../assets/Main.css';
function App() {
  return (
    <div id="menu">
      <header className="App-Header">
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Products</a>
                <ul className="sub-menu">
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </li>
              <li><a href="">Contact</a></li>
          </ul>
      </header>
    </div>
  );
}

export default App;
