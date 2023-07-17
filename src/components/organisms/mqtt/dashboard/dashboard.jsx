import { useReducer } from 'react';

import { reducer, initialState, } from '../../../../reducer/dashboard_reducer';
import { MqttClientContext } from '../../../../contexts/MqttClientContext';

import Attributes from '../attributes/attributes';
import MessagesReceived from '../messages_received/messages_received';
import SensorMonitoring from '../sensor_monitoring/sensor_monitoring';
import Shell from '../shell/shell/shell';

import './dashboard.css';

function Dashboard() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const provider = { state, dispatch, };

    return (
        <div className="dashboard">
            <MqttClientContext.Provider value={ provider }>
                <Attributes />
                <Shell />
                <SensorMonitoring />
                <MessagesReceived />
            </MqttClientContext.Provider>
        </div>
    );
}
export default Dashboard;