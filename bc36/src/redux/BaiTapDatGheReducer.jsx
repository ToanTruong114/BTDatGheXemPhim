import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrGheDuocChon: []
}

const BaiTapDatGheReducer = createSlice({
  name: 'BaiTapDatGheReducer',
  initialState,
  reducers: {
    addToArrAction:(state,action) =>{
        let ghe = action.payload;
        let addressGhe = state.arrGheDuocChon.findIndex(gheDangChon=>gheDangChon.soGhe === ghe.soGhe);
        if(addressGhe !== -1){
            state.arrGheDuocChon.splice(addressGhe,1)
        }else{
            state.arrGheDuocChon.push(ghe)
        }
    },
    removeFromArrAction: (state,action) =>{
        let soGhe = action.payload;
        let soGheFind = state.arrGheDuocChon.findIndex(ghe => ghe.soGhe === soGhe);
        if(soGheFind !== -1){
            state.arrGheDuocChon.splice(soGheFind,1)
        }

    },
   

  }
});

export const {addToArrAction,removeFromArrAction} = BaiTapDatGheReducer.actions

export default BaiTapDatGheReducer.reducer