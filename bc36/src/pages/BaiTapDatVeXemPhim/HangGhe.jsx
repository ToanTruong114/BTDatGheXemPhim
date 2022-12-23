import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToArrAction } from "../../redux/BaiTapDatGheReducer";

export default function HangGhe(props) {

const {arrGheDuocChon} = useSelector(state => state.BaiTapDatGheReducer);
const dispatch = useDispatch()
  
  const renderGhe = () => {
    return props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;

      //Trường hợp ghế đã được chọn
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      // Trường hợp ghế đang được chọn
      let cssGheDangChon = '';
      let indexx = arrGheDuocChon.findIndex(gheDuocChon => gheDuocChon.soGhe === ghe.soGhe)
      if(indexx !== -1){
        cssGheDangChon = 'gheDangChon'
      }

      return (
        <button disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={index} onClick={()=>{
          const action = addToArrAction(ghe);
          dispatch(action)
        }}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  const renderSoHang = () =>{
    return props.hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className="rowNumber" key={index}>{hang.soGhe}</button>
    })

  }

  const renderHangGhe = () => {
    if (props.soHangGhe === 0) {
      return <div style={{marginLeft:30}}>
      {props.hangGhe.hang} {renderSoHang()}
    </div>
    } else {
      return (
        <div>
          {props.hangGhe.hang} {renderGhe()}
        </div>
      );
    }
   
  };
  return (
    <div
      className="text-warning text-left"
      style={{ fontSize: "30px",marginLeft:200,marginTop:10 }}
    >
      {renderHangGhe()}
    </div>
  );
}
