import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist"; // persistStore: sẽ giữ lại store của mình
import { createStore, applyMiddleware } from "redux"; // tạo store
import {thunk} from 'redux-thunk'

const reduxStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)

    return { store, persistor }
}

export default reduxStore