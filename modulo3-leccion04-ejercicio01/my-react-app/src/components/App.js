import React from 'react';
import ButtonAlert from './ButtonAlert';
import OnionHater from './OnionHater';
import Destiny from './Destiny';
import RandomMurray from './RandomMurray';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    
    return (
      <div className="page">
        <ButtonAlert />
        <OnionHater  value=""/>
        <Destiny />
        <RandomMurray />
      </div>
    );
  }
}

export default App;