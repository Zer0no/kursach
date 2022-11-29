import React, {Component} from "react";
import Item from "./item";

export class Pets extends Component{
    render(){
        return(<div id="petsBlock">
            {this.props.pets.map(el => (
                <Item key={el.key} name={el.name} img={el.img} description={el.description} age={el.age} category={el.category}/>
            ))}
        </div>)
    }
}

export default Pets;