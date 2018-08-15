import axios from 'axios';
export const SIGNOUT = 'SIGNOUT';

export const LOGIN = 'LOGIN';
export const login = (payload) => {
    return dispatch => {
        axios.post("/user/login", payload)
            .then(response => {
                const {data} = response;
                const {user} = data;
                console.log("user", user);
                for (let key in user) {
                    localStorage.setItem(key, user[key]);
                }
                delete user.expireIn;
                dispatch({type: LOGIN, payload: user});
                setTimeout(() => {
                    axios.get("/user/refreshToken")
                        .then(response => {
                            const {token} = response.data;
                            localStorage.setItem("token", token);
                        })
                        .catch(err => {
                            // handle error
                        })
                }, )
            })
            .catch(err => {
                // handle error
            });
    };
};

export const SIGNUP = 'SIGNUP';
export const signup = (payload) => {
    return dispatch => {
        console.log(payload);
        axios.post("/user/register", payload)
            .then(response => {
                
            })
            .catch(err => {
                // handle err;
            })
    };
};