import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: 'string',
        require: true
    },
    content: {
        type: 'string',
        require: true
    },
    image: {
        type: 'string',
        require: false
    }
}, {timestamps: true})

export default mongoose.model("Blog", blogSchema)