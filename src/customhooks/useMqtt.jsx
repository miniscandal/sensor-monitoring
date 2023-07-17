import { useContext, useEffect } from 'react';
import { MqttClientContext } from '../contexts/MqttClientContext';

const MQTT_TOPIC_PUBLISH = import.meta.env.VITE_MQTT_TOPIC_PUBLISH;

function useMqtt() {
    const { state, dispatch } = useContext(MqttClientContext);

    useEffect(() => {
        state.mqttClient.on('connect', () => {
            dispatch({ type: 'setMqttClient' });
        });
        state.mqttClient.on('error', () => {
            state.mqttClient.end();
        });
        state.mqttClient.on('message', (topic, message) => {
            dispatch({ type: 'setPayload', data: { topic, message, }, });
        });
        state.mqttClient.on('reconnect', () => {
            dispatch({ type: 'setMqttClient' });
        });
    }, [state.mqttClient]);

    const clientPublish = (idDevice, message) => {
        const topic = `${ MQTT_TOPIC_PUBLISH }/${ idDevice }`;
        state.mqttClient.publish(topic, JSON.stringify(message));
    };

    return {
        mqtt: state.mqttClient,
        sensors: state.sensors,
        clientPublish: clientPublish,
    };
}

export default useMqtt;