import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name: {type: String, required: true,},
    phone: {type: String, required: true,},
    gender: {type: Boolean,},
    age: {type: Number,}
});

export default mongoose.model('Form', FormSchema)