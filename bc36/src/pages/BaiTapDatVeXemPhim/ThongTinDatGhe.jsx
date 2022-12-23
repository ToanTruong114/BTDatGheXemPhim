import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromArrAction } from "../../redux/BaiTapDatGheReducer";

export default function ThongTinDatGhe() {
  const {arrGheDuocChon} = useSelector(state => state.BaiTapDatGheReducer)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="mt-5">
        <button className="gheDuocChon"></button> <span>Ghế đã đặt</span>
        <br />
        <button className="gheDangChon"></button> <span>Ghế đang đặt</span>
        <br />
        <button className="ghe mx-0"></button> <span>Ghế chưa đặt</span>
      </div>
      <div className="mt-5">
        <table className="table text-light" border='2'>
            <thead >
                <tr style={{fontSize:'25px'}}>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
           
                {arrGheDuocChon.map((item,index)=>{
                  return <tr key={index}>
                    <td className="text-warning">{item.soGhe}</td>
                    <td className="text-warning">{item.gia.toLocaleString()}</td>
                    <td className="text-right"><button className="btn btn-danger text-dark" onClick={()=>{
                      const action = removeFromArrAction(item.soGhe);
                      dispatch(action)
                      console.log(action)

                    }}>Hủy</button></td>

                  </tr>
                })}
            </tbody>
            <tfoot>
              <tr style={{fontSize:20}}>
                <td>Tổng thanh toán :</td>
                <td>{arrGheDuocChon.reduce((tongTien,gheDangChon,index)=>{
              return tongTien += gheDangChon.gia;

             },0).toLocaleString()}</td>
              </tr>
             
            </tfoot>
        </table>
        
      </div>
    </div>
  );
}
