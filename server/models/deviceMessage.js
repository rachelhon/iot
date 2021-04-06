import mongoose from 'mongoose';

const deviceSchema = mongoose.Schema({
    deviceName: String,
    deviceID: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

var DeviceMessage = mongoose.model('DeviceMessage', deviceSchema);

export default DeviceMessage;