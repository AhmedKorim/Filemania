import React, {Fragment} from 'react';
import withPadding from "../../HOC/wrapper/Wrapper";
import Grid from "@material-ui/core/Grid/Grid";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Grid container>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withPadding(Home);