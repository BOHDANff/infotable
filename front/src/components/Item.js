import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@material-ui/core/Button";

const Item = (props) => {
    return (
        <Card sx={{minWidth: 275}} style={{marginBottom: "20px"}} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Item;