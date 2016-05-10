import mongoose from 'mongoose'

export default mongoose.Schema({
    title: { type: String, required: [true, 'Title is required'] },
    done: { type: Boolean, default: false }
})
