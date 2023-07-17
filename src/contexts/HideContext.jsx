import { createContext } from 'react';

const providerDashboard = {
    clientAttributes: true,
    messagesMqtt: true,
    editSensor: true,
};

const providerShell = {
    shellSticky: true,
    infoForm: true,
};

const HideContext = createContext(null);

export { HideContext, providerDashboard, providerShell, };