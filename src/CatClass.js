import React from "react";

export default class CatClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: props.image, name: props.name, price: props.price };
  }
  render() {
    return (
      <div>
        <img
          height={"200px"}
          width={"200px"}
          src={`./asset/${this.state.image}`}
          alt={this.state.name}
        />
        <h4 style={{ margin: 0 }}>name : {this.state.name}</h4>
        <h4 style={{ margin: 0 }}>price : {this.state.price}</h4>
      </div>
    );
  }
}
