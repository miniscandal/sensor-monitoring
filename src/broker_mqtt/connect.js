const MQTT_BROKER_HOST = import.meta.env.VITE_MQTT_BROKER_HOST;
const MQTT_BROKER_PORT = import.meta.env.VITE_MQTT_BROKER_PORT;
const MQTT_TOPIC_SUBSCRIBE = import.meta.env.VITE_MQTT_TOPIC_SUBSCRIBE;
const MQTT_BROKER = `${ MQTT_BROKER_HOST }:${ MQTT_BROKER_PORT }`;

const connect = (function () {
    let instance;

    const createInstance = () => {
        const client = mqtt.connect(MQTT_BROKER);
        client.subscribe(MQTT_TOPIC_SUBSCRIBE);

        return client;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();

export default connect;