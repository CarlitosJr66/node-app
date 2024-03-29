import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true,
    }
})

export default mongoose.model("employee", employeeSchema)