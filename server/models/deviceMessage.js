import mongoose from 'mongoose';

const deviceSchema = mongoose.Schema({
    deviceName: String,
    deviceID: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var DeviceMessage = mongoose.model('DeviceMessage', deviceSchema);

export default DeviceMessage;