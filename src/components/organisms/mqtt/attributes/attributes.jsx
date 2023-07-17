import { useContext } from 'react';
import useMqtt from '../../../../customhooks/useMqtt';

import { HideContext } from '../../../../contexts/HideContext';

import InformationIcon from '../../../molecules/information_icon/information_icon';

import './attributes.css';

function Attributes() {
    const { hide } = useContext(HideContext);
    const { mqtt, sensors, } = useMqtt();
    
	const { connected, options, } = mqtt;
	const { host, port, protocol, clientId, } = options;
    const items = [
        {
            key: 'Status',
            value: connected ? 'connected' : 'reconnecting',
            iconName: 'broadcast_on_home',
        },
        {
            key: 'Sensors',
            value: sensors.length,
            iconName: 'settings_remote',
        },
        {
            key: 'Host',
            value: host,
            iconName: 'dns',
        },
        {
            key: 'Port',
            value: port,
            iconName: 'route',
        },
        {
            key: 'Protocol',
            value: protocol,
            iconName: 'nat',
        },
        {
            key: 'Client ID',
            value: clientId,
            iconName: 'api',
        },
    ];
    const clientAttributes = items.map(item => (
        <InformationIcon key={ item.key } attributes={ item } />
    ));
    
    return (
        <div className={ `${ hide.clientAttributes && 'attributes--hide' } attributes` }>
            { clientAttributes }
        </div>
    );
}

export default Attributes;