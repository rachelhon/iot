import Devices from "../components/Devices/Devices"

export default (devices = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...devices, action.payload];
        default:
            return devices;
    }

};