import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withPadding from "../../HOC/wrapper/Wrapper";
import Container from "../../HOC/container/container";

class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Grid container>
                    <Grid item className="card-item" md={4} xs={12}>
                        <Paper>
                            <Typography>
                                hi there
                            </Typography>
                        </Paper>
                    </Grid><Grid item className="card-item" md={4} xs={12}>
                    <Paper>
                        <Typography>
                            hi there
                        </Typography>
                    </Paper>
                </Grid><Grid item className="card-item" md={4} xs={12}>
                    <Paper>
                        <Typography>
                            hi there
                        </Typography>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withPadding(Dashboard);