import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {forwardRef} from "react";
import {FormHelperText} from "@mui/material";

export const MyRadio = forwardRef((props, ref) =>{

        return (
            <FormControlLabel  control={<Radio />} inputRef={ref} {...props}/>
        );
    }
)
