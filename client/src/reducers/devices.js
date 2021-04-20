
const deviceReducer = (devices = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return devices.filter((device) => device._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...devices, action.payload];
        case 'SEND_DEVICE_DATA':
            return action.payload;    
        default:
            return devices;
    }

};

export default deviceReducer;