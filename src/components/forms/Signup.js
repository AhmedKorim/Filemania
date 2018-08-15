import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import Button from "@material-ui/core/Button/Button";

const SignUp = props => {
    const {name, email, password, rePassowrd, gender, handleChange ,handelSignup} = props;
    return <form onSubmit={handelSignup}>
        <TextField
            required
            id="name"
            label="Name"
            value={name}
            onChange={handleChange('name')}
            margin="normal"
        />
        <TextField
            required
            id="email"
            label="email"
            value={email}
            onChange={handleChange('email')}
            margin="normal"
        />
        <TextField
            required
            id="password"
            label="password"
            type="password"
            value={password}
            onChange={handleChange('password')}
            margin="normal"
        />
        <TextField
            required
            id="re-password"
            type="password"
            value={rePassowrd}
            label="Reenter password"
            onChange={handleChange('re-password')}
            margin="normal"
        /> <TextField
        id="select-currency-native"
        select
        label="Native select"
        value={gender}
        onChange={handleChange('gender')}
        helperText="Please select your currency"
        margin="normal"
    >
        <option value='male'>
            male
        </option>
        <option value='female'>
            female
        </option>
    </TextField>
        <Button variant="contained">
            Login
        </Button>
    </form>;
}
export default SignUp;