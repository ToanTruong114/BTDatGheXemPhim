import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BaiTapDatVeXemPhim from "./pages/BaiTapDatVeXemPhim/BaiTapDatVeXemPhim";
import { Provider } from "react-redux";
import {store} from './redux/conFigStore.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <BaiTapDatVeXemPhim />
  </Provider>
);
