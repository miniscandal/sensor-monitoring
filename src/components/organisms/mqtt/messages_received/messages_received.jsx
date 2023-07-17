import { useContext, useRef, useEffect, } from 'react';

import { MqttClientContext } from '../../../../contexts/MqttClientContext';
import { HideContext } from '../../../../contexts/HideContext';

import './messages_received.css';

function MessagesReceived() {
    const { state } = useContext(MqttClientContext);
    const { hide } = useContext(HideContext);
    const ref = useRef(null);
    useEffect(() => {
        const message = state.payload.message;
        if (message) {
            const p = document.createElement('p');
            p.textContent = JSON.stringify(JSON.parse(message));
            p.classList.add('paragraph--low');
            p.classList.add('color--453c41');
            ref.current.appendChild(p);
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [state.payload.message]);
    const style = hide.messagesMqtt && 'messages_received--hide';

    return (
        <div ref={ ref } className={ `${ style } messages_received` }></div>
    );
}

export default MessagesReceived;