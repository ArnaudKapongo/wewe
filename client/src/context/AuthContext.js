import createDataContext from "./createDataContext";
import axios from 'axios';

const authReducer = (state, action) => {

    const { type } = action;

    switch(type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password}) => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        email, password
    });

       try {
        const res = await axios.post('/api/users', body, config);

       } catch(err) {
        console.log(err.message);

       }
    };
};

const signin = (dispatch) => {
    return({ email, password}) => {

    };
}

const signout = (dispatch) => {
    return() => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup , signin, signout },
    { isAuthenticated: false }
);