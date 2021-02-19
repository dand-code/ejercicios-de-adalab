import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.currentTarget.value });
    if (this.state.value.includes("cebolla")) {
      alert("NOOOOO!!! ODIO CEBOLLA!!!");
      // this.forceUpdate();
      // event.preventDefault();
    }
  }

  // handleSubmit(event) {
  //   if (this.state.value.includes("cebolla" || "cebollas")) {
  //     alert("NOOOOO!!! ODIO CEBOLLA!!!");
  //     this.forceUpdate();
  //     event.preventDefault();
  //   }
   
  // }
  render() {

    return (  
        <form className="form" >
        <label>
          Escribe aqui:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
     );
  }
}

export default OnionHater;