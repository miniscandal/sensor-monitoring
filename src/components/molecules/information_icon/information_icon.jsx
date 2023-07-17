import KeyValue from '../key_value/key_value';
import Icon from "../../atoms/icon/icon";

import './information_icon.css';

function InformationIcon({ attributes }) {
    const { key, value, iconName, } = attributes;
    const icon = {
        name: iconName,
        style: 'icon--medium color--8fa329',
    };
    const keyValue = {
        key: {
            text: key
        },
        value: {
            text: value,
            style: 'font--normal'
        },
        style: 'key_value--column',
    };

    return (
        <div className="information_icon">
            <Icon attributes={ icon } />
            <KeyValue attributes={ keyValue } />
        </div>
    );
}

export default InformationIcon;