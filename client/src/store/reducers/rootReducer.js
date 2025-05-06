import authReducer from "./authReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // redux-persist: để load trang không bị đổi giá trị 
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2 // Reconciler: người hòa giải
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token'] // nói cho persist biết là cần giữ giá trị nào ở dưới local
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    post: postReducer
})

export default rootReducer