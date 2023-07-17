import connect from '../broker_mqtt/connect';

const handleSetPayload = (state, action) => {
    const message = JSON.parse(action.data.message);
    if (!message) {
        return state;
    }
    
    if (message.status_report === 'command') {
        const sensors = state.sensors.filter(sensor => (
            sensor.id_device !== message.id_device
        ));
        return { ...state, payload: action.data, sensors };
    }
    if (message.status_report === 'exit') {
        const sensors = state.sensors.filter(sensor => (
            sensor.id_device !== message.id_device
        ));
        return { ...state, payload: action.data, sensors };
    }
    /**
     * If message.status_report is 'on' or 'off'.
     */
    const sensor = state.sensors.find(sensor => sensor.id_device === message.id_device);
    if (sensor) {
        sensor.humidity = message.humidity;
        sensor.temperature = message.temperature;
        sensor.status_report = message.status_report;
        return { ...state, payload: action.data, };
    }
    /**
     * Save a new sensor if it does not exist.
     */
    return { ...state,
        payload: action.data,
        sensors: [...state.sensors, { ...message }],
    };
}

const handleSetSensors = (state, action) => {
    if (!action.sensor) {
        return { ...state }
    };
    return { ...state, sensors: [...state.sensors, action.sensor], };
}

function reducer(state, action) {
    const actions = {
        setPayload: () => handleSetPayload(state, action),
        setMqttClient: () => ({ ...state, mqttClient: connect.getInstance(), }),
        setSensors: () => handleSetSensors(state, action),
        setIdDevice: () => ({ ...state, idDevice: action.idDevice, }),
    };
    return actions[action.type]();
}

const initialState = {
    payload: {},
    mqttClient: connect.getInstance(),
    sensors: [],
    idDevice: null,
};

export { reducer, initialState, };