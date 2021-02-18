import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
    render() {
        return (
            <section className="section-cats">
            <h1>All Cats Are Beautiful </h1>
            <ul className="section-cats_list"> 
              <li>
                        <RandomCat  height={this.props.height}  width={this.props.width.width1}/>     
              </li>
              <li>
                        <RandomCat height={this.props.height}  width={this.props.width.width2} />     
              </li>
              <li>
                   <RandomCat />     
              </li>
            </ul>
          </section>  
        );
    }
}

export default CatList;