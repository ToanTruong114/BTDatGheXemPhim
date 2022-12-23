import React from "react";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../assets/data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default function BaiTapDatVeXe() {
  const renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe = {index}/>
        </div>
      );
    });
  };
  return (
    <div
      style={{
        backgroundImage: "url('./img/bgmovie.jpg')",
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="text-center">
                <h1 className="text-warning">ĐẶT VÉ XEM PHIM</h1>
                <div className="text-light">Màn hình</div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
              </div>
              <div className="mt-2">{renderHangGhe()}</div>
              
            </div>
            <div className="col-4 text-light">
              <h2 className="mt-2">Danh sách ghế được chọn</h2>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
