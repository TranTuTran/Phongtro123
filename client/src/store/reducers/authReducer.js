import actionTypes from "../actions/actionTypes";

// Tạo giá trị khởi tạo cho Reducer + tạo biến isLoggedIn để biết đăng nhập hay chưa (false là chưa, rồi là true) và biến token để lưu Jsonwebtoken
const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    update: false
}

// Tạo hàm Reducer: nhận 2 đối số state và action ( action nhận thông qua hàm disbash của redux)
// Dùng switch case
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg: ''
            }
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
                update: !state.update
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: ''
            }

        default:
            return state;
    }
}

export default authReducer