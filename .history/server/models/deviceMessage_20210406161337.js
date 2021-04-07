import mongoose from 'mongoose';

const deviceSchema = mongoose.Schema({
    deviceName: String,
    deviceID: String,
    email: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var DeviceMessage = mongoose.model('DeviceMessage', deviceSchema);

export default DeviceMessage;