import { useContext } from 'react';
import useMqtt from '../../../../customhooks/useMqtt';

import { MqttClientContext } from '../../../../contexts/MqttClientContext';

import Sensor from '../sensor/sensor';

import './sensor_monitoring.css';

/**
 * Received values: humidity and temperature.
 * Range: humidity: 0 to 100%, temperature: -0 to +90 °C.
 * Example: '{ \"id_device\": 1, \"humidity\": 12, \"temperature\": 21 }'.
 */

function SensorMonitoring() {
    const { state, dispatch, } = useContext(MqttClientContext);
    const { clientPublish } = useMqtt();
    const handleClick = (event) => {
        const { tagName, parentNode, dataset } = event.target;

        if (tagName !== 'LI') return;

        const { idDevice } = JSON.parse(parentNode.dataset.payload);
        dispatch({ type: 'setIdDevice', idDevice: idDevice, });
        const message = { action: dataset.action };
        clientPublish(idDevice, message);
    };
    const devices = state.sensors.map(sensor => (
        <Sensor key={ sensor.id_device } attributes={ sensor } />
    ));

    return (
        <div className="sensor_monitoring" >
            <div className="sensor_monitoring__div" onClick={ handleClick }>
                { devices }
            </div>
        </div>
    );
}

export default SensorMonitoring;