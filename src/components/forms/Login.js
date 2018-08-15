import React from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const LoginForm = props => {
    const {email, password, handleChange ,handelLogin} = props;
    return (
        <form onSubmit={handelLogin}>
            <TextField
                required
                id="Login-email"
                label="email"
                value={email}
                onChange={handleChange('email')}
                margin="normal"
            />
            <TextField
                required
                id="login-password"
                label="password"
                type="password"
                value={password}
                onChange={handleChange('password')}
                margin="normal"
            />
            <Button
            type="submit"
                variant="contained" >
                Login
            </Button>
        </form>
    )
}
export default LoginForm