import React from 'react'
import ListItem from "@material-ui/core/ListItem/ListItem";
import Grid from "@material-ui/core/Grid/Grid";
import {Link} from "react-router-dom";

const SideListItem = props => {

    // returns list item with a router link
    const {to, icon, name} = props;
    const link = props => <Link to={to} {...props} />;


    return (
        <ListItem button component={link}>
            <Grid container className="icon">
                <Grid item xs={3}>
                    {icon}
                </Grid>
                <Grid item xs className="description">
                    <h3>{name}</h3>
                </Grid>
            </Grid>
        </ListItem>
    )
}
export default SideListItem