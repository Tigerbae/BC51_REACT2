import React, { Component } from "react";
import DanhSachKinh from "./DanhSachKinh";
import dataGlasses from "../../Data/dataGlasses.json"
import Kinh from "./Kinh";
export default class BaiTapChonKinh extends Component {
  state={
    glassDetail:dataGlasses[0],
  }
  getGlassDetail=(glass)=>{
    this.setState({
      glassDetail:glass
    })
  }
  render() {
    return (
        <div className="card bg-dark">
          <img className="card-img" src="./glassesImage/background.jpg" alt="Card image" />
          <div className="card-img-overlay">
            <h5 className="card-title"><h3 className=" text-dark p-5">TRY GLASSES APP ONLINE</h3></h5>
            <div className="row">
              <Kinh glassDetail={this.state.glassDetail} />
              <div className="col-6">
                <img src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
            <DanhSachKinh dataGlasses={dataGlasses} getGlassDetail={this.getGlassDetail}/>
          </div>
        </div> 
    );
  }
}
