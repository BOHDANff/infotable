import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/actionCreators/TableActionCreator";

const Item = (props) => {
    const dispatch = useDispatch();
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
                <Button size="small" onClick={() => dispatch(deleteItem(props.id))}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Item;