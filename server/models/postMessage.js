import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    deviceName: String,
    deviceID: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;