// Tạo giá trị khởi tạo cho Reducer + tạo biến userData rỗng
const initState = {
    userData: {}
}

// Tạo hàm Reducer: nhận 2 đối số state và action ( action nhận thông qua hàm disbash của redux)
// Dùng switch case
const userReducer = (state = initState, action ) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default userReducer