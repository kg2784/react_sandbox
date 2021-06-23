import React from 'react';
import './App.css';
import './StockGraph.css';

const StockGraph = ({color}: {color: "green"|"red"}) => (
    <div className="stock-graph-component">
        <div className={"stock-logo"}><img src={"mastercard.png"}/></div>
        <div className={"stock-name"}>Company</div>
        <div className={"stock-graph"}><img src={`sample-graph-${color}.png`}/></div>
        <img src={`price-diff-${color}.png`}/>
        <div className={"stock-price"} style={{color}}>¥888,888</div>
        <div className={"stock-price-diff"}>¥88.88</div>
    </div>
);

function App() {
  return (
      <div>
          <StockGraph color={"green"}/>
          <StockGraph color={"red"}/>
      </div>
    )
}

export default App;
