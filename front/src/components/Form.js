import React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {MyForm} from "./UI/MyForm/MyForm";
import {MyInput} from "./UI/MyInput";
import {MyFormButton} from "./UI/MyFormButton";

function Form(props) {
    const schema = yup.object().shape({
        title: yup
            .string()
            .required("This is a required field"),
        body: yup
            .string()
            .required("This is a required field"),
    });
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit = (notat) => {
        // dispatch(createItem({...notat, id: String(Date.now())}))
        // reset()
        // props.setVisible(false)
    }
    // const dispatch = useDispatch()
    return (
        <MyForm onSubmit={handleSubmit(onSubmit)}>
            <MyInput
                {...register('title')}
                id={'title'}
                type={'text'}
                label={'Label of notation'}
                error={!!errors.title}
                helperText={errors?.title?.message}
            />
            <MyInput
                {...register('body')}
                id="body"
                type="text"
                label="Text of notation"
                multiline
                rows={4}
                error={!!errors.body}
                helperText={errors?.body?.message}
            />
            <MyFormButton style={{marginTop:10, width: "40%"}}>Create item</MyFormButton>
        </MyForm>
    );
}

export default Form;