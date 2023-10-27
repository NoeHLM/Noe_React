import React, { useEffect, useState } from 'react';
import './Exo2.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 34) {
      alert("Vous avez fait 34 coups");
    }
  }, [count]);

  return (
    <div className="app-container">
      <p className="click-count">Tu as cliqué {count} fois</p>
      <button className="click-button" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default App;
