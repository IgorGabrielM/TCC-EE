import myaxios from "./myaxios"
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

export const loginUser = () => {
    return {
        type: 'login/loginUser',
    }
}

export const logoutUser = () => {
    return {
        type: 'login/logoutUser',
    }
}

export async function reduxLogin({ email, password }) {
    return async dispatch => {
        const response = await myaxios.post("/auth/login", { email, password })
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", response.data.token);
        await waitFor(1500);
        dispatch(loginUser())
    }
}