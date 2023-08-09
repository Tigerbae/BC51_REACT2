import React, { Component } from "react";

export default class Kinh extends Component {
  render() {
    return (
      <div className="col-6">
        <img
          style={{ position: "relative" }}
          src="./glassesImage/model.jpg"
          alt=""
        />
        <img
          style={{ position: "absolute", top: 150, right: 240, width: 270 }}
          src={this.props.glassDetail.url}
          alt=""
        />
        <div
          style={{ position: "absolute", bottom: 0, right: 150, width: 250 }}
          className="bg-danger"
        >
          <p>{this.props.glassDetail.name}</p>
          <p>
            {this.props.glassDetail.desc}
          </p>
        </div>
      </div>
    );
  }
}
