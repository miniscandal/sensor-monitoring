import { useState, useContext, } from 'react';
import useMqtt from '../../../../../customhooks/useMqtt';

import Form from '../../../form/form';

import { MqttClientContext } from '../../../../../contexts/MqttClientContext';

function CommandInput() {
    const [fieldErrors, setFieldErrors] = useState({ command: false });
    const { state } = useContext(MqttClientContext);
    const { clientPublish } = useMqtt();

    const validateForm = (data) => {
        const command = data.get('command');
        const result = /^set-id-device:[ ]*[A-Za-z0-9_]{1,6}$/.test(command);
        
        if (!result) {
            return setFieldErrors({ command: true });
        }
        if (fieldErrors.command) {
            setFieldErrors({ command: false });
        }
        if (!state.idDevice) {
            alert('Device ID not selected!')
            return;
        }

        const [name, value] = command.replace(/[ ]/g, '').split(':');
        const message = { action: 'command', command: { [name]: value }, };
        clientPublish(state.idDevice, message);
    };
    
    const fields = [
        {
            text: 'command',
            fieldError: fieldErrors.command,
            input: { type: "text", id: "command", name: "command", },
        }
    ];

    return (
        <section>
            <Form fields={ fields } callback={ validateForm } />
        </section>
    );
}

export default CommandInput;