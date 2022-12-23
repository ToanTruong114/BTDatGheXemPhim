import {configureStore} from '@reduxjs/toolkit'
import BaiTapDatGheReducer from './BaiTapDatGheReducer'
export const store = configureStore({
    reducer:{
        BaiTapDatGheReducer
    }
})