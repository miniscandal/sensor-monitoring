import { useContext } from 'react';

import KeyValue from '../../../../molecules/key_value/key_value';
import UnorderedList from '../../../../molecules/unordered_list/unordered_list';

import { HideContext } from '../../../../../contexts/HideContext';
import { MqttClientContext } from '../../../../../contexts/MqttClientContext';

import './menu_bar.css';

function MenuBar() {
    const { state } = useContext(MqttClientContext);
    const { stateHide, setStateHide, } = useContext(HideContext);
    const handleClick = (event) => {
        if (event.target.tagName != 'LI') return;
		
        const action = event.target.dataset.action;
        const actions = {
            info: () => setStateHide({
				...stateHide,
				infoForm: !stateHide.infoForm,
			}),
            pin: () => setStateHide({
				...stateHide,
				shellSticky: !stateHide.shellSticky,
			}),
        };
        actions[action]();
        event.target.classList.toggle('color--8fa329');
    }
    const unorderedLists = {
        itemLists: [
            {
				iconName: 'info',
				dataAction: 'info',
			},
            {
				iconName: 'push_pin',
				dataAction: 'pin',
			},
        ],
        onClick: handleClick,
        style: 'unordered_list--flex_row unordered_list--buttons',
    };
    const action = state.messagePublish?.action;
    const idDevice = ((action === null) || (action === 'cancel')) ? '?' : state.idDevice;
    const keyValue = {
        key: {
			text: `Sensor ID : ${ '\u00A0' }`
		},
        value: {
			text: idDevice,
			style: 'color--ea592a',
		},
        style: 'key_value--row',
    };

    return (
        <section className="shell_menu_bar">
            <KeyValue attributes={ keyValue } />
            <UnorderedList attributes={ unorderedLists } />
        </section>
    );
}

export default MenuBar;