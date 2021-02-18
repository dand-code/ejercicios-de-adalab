import React from "react";
import CatList from "./CatList";


class App extends React.Component {
  render() {
    const pepino = {
      width1: 200,
      width2: 400
    };
    return (
      <div className="App">
        <CatList height={200} width={pepino}/>
      </div>
    );
  }
}

export default App;
