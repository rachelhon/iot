import mongoose from 'mongoose';

const deviceSchema = mongoose.Schema({
    deviceName: {String, required: true},
    deviceID: {String, required: true},
    email: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var DeviceMessage = mongoose.model('DeviceMessage', deviceSchema);

export default DeviceMessage;