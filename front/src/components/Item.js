import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@material-ui/core/Button";

const Item = (props) => {
    return (
        <Card sx={{minWidth: '100%'}} style={{marginBottom: "20px"}} variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div">
                    Name: {props.name}
                </Typography>
                <Typography variant="h6" component="div">
                    Phone: {props.phone}
                </Typography>
                { props.gender === undefined ?
                    <></> :
                    <Typography variant="h6" component="div">
                        Gender: {props.gender? 'Male' : 'Female'}
                    </Typography>
                }
                {!props.age?
                        <></> :
                        <Typography variant="h6" component="div">
                            Age: {props.age}
                        </Typography>
                }
            </CardContent>
            <CardActions>
                <Button size="small" >Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Item;