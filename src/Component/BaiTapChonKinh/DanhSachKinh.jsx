import React, { Component } from "react";

export default class DanhSachKinh extends Component {
  renderAllList() { 
    return this.props.dataGlasses.map((element)=>{
      return(
        <img key={element.id} onClick={()=>{this.props.getGlassDetail(element)}} className="w-25" src={element.url} alt="" /> 
      )
    })
          
  }
  render() {
    return (
      <div className="bg-white">
        {this.renderAllList()}
      </div>
    );
  }
}
