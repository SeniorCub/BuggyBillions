import blogModels from "../models/blogmodels.js";

export const uploadBlog = async (req, res) => {
    try {
        const {title, content, image} = req.body
        if (!title || !content) {
            return res.send("Fill out all Fields");
        }

        const newBlog = await new blogModels({title, content, image}).save()
        res.status(200).send({
            success: true, 
            msg: "Blod Posted Succesfully",
            newBlog
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}