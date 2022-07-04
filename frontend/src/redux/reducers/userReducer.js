const initialState = {
    user: null,
    snackbar: {
        view: false,
        message: "",
        success: false,
    },
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "user":
            return {
                ...state,
                user: action.payload,
            };
        case "message":
            return {
                ...state,
                snackbar: action.payload,
            };
        default:
            return state;
    }
};
export default usersReducer;