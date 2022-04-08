import React from 'react';
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {MyForm} from "./UI/MyForm/MyForm";
import {MyInput} from "./UI/MyInput";
import {MyFormButton} from "./UI/MyFormButton";
import {MyRadio} from "./UI/MyRadio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import {useDispatch} from "react-redux";
import {createItem} from "../store/actionCreators/TableActionCreator";


function Form(props) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required("This is a required field")
            .max(20, `Must be less than 20 characters`),
        phone: yup
            .string()
            .required("This is a required field")
            .matches(/^([+]?[0-9]{10,14})?$/, "Write your phone number correctly"),
        age: yup
            .number()
            .positive('Write your age correctly')
            .max(120, 'Please enter your real age')
            .nullable(true)
            .transform((v) => (v === '' || Number.isNaN(v) ? null : v)),
    });
    const {register, handleSubmit, formState:{errors}, reset, control} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            gender: null,
        },
    })
    const dispatch = useDispatch();
    const onSubmit = (item) => {
        if (!item.age) {
            delete item.age
        }
        if (item.gender === null) {
            delete item.gender
        } else if (item.gender === 'true') {
            item.gender = true
        } else {
            item.gender = false
        }

        console.log(item);
        dispatch(createItem({item}))
        reset({
            name:'',
            phone:'',
            age:''
        })
    }
    return (
        <MyForm onSubmit={handleSubmit(onSubmit)}>
            <MyInput
                {...register('name')}
                id={'name'}
                type={'text'}
                label={'Your name'}
                error={!!errors.name}
                helperText={errors?.name?.message}
            />
            <MyInput
                {...register('phone')}
                id="phone"
                type="text"
                label="Your phone"
                error={!!errors.phone}
                helperText={errors?.phone?.message}
            />
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <Controller
                    control={control}
                    name="gender"
                    render={({field}) => {
                    return (
                    <RadioGroup {...field} row>
                        <FormControlLabel  control={<Radio />} value={false} label="Female"/>
                        <FormControlLabel  control={<Radio />} value={true} label="Male"/>
                    </RadioGroup>
                    )
                }}
                />
            </FormControl>
            <MyInput
                {...register('age')}
                id="age"
                type="number"
                label="Your age"
                error={!!errors.age}
                helperText={errors?.age?.message}
            />
            <MyFormButton style={{marginTop:10, width: "40%"}}>Create item</MyFormButton>
        </MyForm>
    );
}

export default Form;