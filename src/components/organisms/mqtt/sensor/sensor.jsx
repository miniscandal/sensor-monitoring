import { useContext } from 'react';

import { HideContext } from '../../../../contexts/HideContext';

import UnorderedList from '../../../molecules/unordered_list/unordered_list';
import KeyValue from '../../../molecules/key_value/key_value';
import IconParagraph from '../../../molecules/icon_paragraph/icon_paragraph';

import Icon from '../../../atoms/icon/icon';
import './sensor.css';

function Sensor({ attributes }) {
    const { id_device, status_report, humidity, temperature, } = attributes;
    const { hide } = useContext(HideContext)
    const unorderedLists = {
        itemLists: [
            {
				iconName: 'tab_close',
				dataAction: 'exit',
			},
            {
				iconName: 'mode_off_on',
				dataAction: 'offOn',
			},
            { 
                iconName: 'code',
                dataAction: status_report === 'update' ? 'cancel' : 'update',
            },
        ],
        style: 'unordered_list--flex_row unordered_list--buttons',
        dataPayload: {
			idDevice: id_device
		},
    };
    const iconParagraphs = {
        humidity: {
            icon: {
				name: 'humidity_percentage',
				style: 'icon--low',
			},
            text: `${ humidity ?? '?' }%`,
			style: 'icon_paragraph--flex_row',
        },
        thermometer: {
            icon: {
				name: 'thermometer',
				style: 'icon--low',
			},
            text: `${ temperature ?? '?' }°`,
			style: 'icon_paragraph--flex_row',
        },
    };
    const icons = {
        connected: {
            name: (status_report === 'off') ? 'sensors_off' : 'sensors',
            style: 'icon--low color--8fa329',
        },
        sensor: {
            name: 'motion_sensor_active',
			style: 'icon--medium color--00457e',
        },
    };
    const keyValue = {
        key: {
			text: `Device ID : ${ '\u00A0' }`,
			style: 'color--00457e'
		},
        value: {
			text: id_device,
			style: 'paragraph--bold color--00457e',
		},
        style: 'key_value--row',
    };
    const styles = {
        sensor: `sensor--status_${ status_report }`,
        unorderedLists: hide.editSensor && 'sensor__div--unordered_list_hide',
    };

    return (
        <div className={ `${ styles.sensor } sensor` }>
            <div className="sensor__div--status">
                <Icon attributes={ icons.connected } />
            </div>
            <div className="sensor__div--id">
                <Icon attributes={ icons.sensor } />
                <KeyValue attributes={ keyValue } />
            </div>
            <div className="sensor__div--values">
                <IconParagraph attributes={ iconParagraphs.humidity } />
                <IconParagraph attributes={ iconParagraphs.thermometer } />
            </div>
            <div className={ `${ styles.unorderedLists } sensor__div--unordered_list` }>
                {
                    !hide.editSensor && <UnorderedList attributes={ unorderedLists } />
                }
            </div>
        </div>
    );
}

export default Sensor;