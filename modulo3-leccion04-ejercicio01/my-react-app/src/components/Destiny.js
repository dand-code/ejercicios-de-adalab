import React from 'react';

class Destiny extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {value: 'Buenos Aires'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Ti destino en viajar a: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Selecione seu destino:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Sydney">Sydney</option>
                <option value="Praga">Praga</option>
                <option value="Boston">Boston</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
 
}

export default Destiny;