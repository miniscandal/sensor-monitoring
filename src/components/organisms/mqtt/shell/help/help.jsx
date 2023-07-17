import { useContext } from 'react';

import KeyValue from '../../../../molecules/key_value/key_value';

import { HideContext } from '../../../../../contexts/HideContext';
import { MqttClientContext } from '../../../../../contexts/MqttClientContext';

import './help.css';

function Help() {
    const { stateHide } = useContext(HideContext);
    const { state } = useContext(MqttClientContext);

    const action = state.messagePublish?.action;
    const idDevice = ((action === null) || (action === 'cancel')) ? '?' : state.idDevice;

    const keyValues = [
        {
            key: {
				text: `Sensor ID : ${ '\u00A0' }`
			},
            value: {
				text: idDevice,
				style: 'color--ea592a',
			},
            style: 'key_value--row',
        },
        {
            key: {
				text: 'Description:'
			},
            value: {
				text: 'List commands',
				style: 'color--8fa329',
			},
            style: 'key_value--column',
        },
        {
            key: {
				text: 'Usage:'
			},
            value: {
				text: '[option] : [value]',
				style: 'color--8fa329',
			},
            style: 'key_value--column',
        },
        {
            key: {
				text: 'Options:'
			},
            value: {
				text: 'set-id-device',
				style: 'color--8fa329',
			},
            style: 'key_value--column',
        },
    ];

    const style = stateHide.infoForm && 'shell_help--hide';

    return (
        <section className={ `${ style } shell_help` }>
            <KeyValue attributes={ keyValues[1] } />
            <KeyValue attributes={ keyValues[2] } />
            <KeyValue attributes={ keyValues[3] } />
        </section>
    );
}

export default Help;