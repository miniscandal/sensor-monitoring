import { useState } from 'react';

import ControlDashboard from '../control_dashboard/control_dashboard';
import Dashboard from '../mqtt/dashboard/dashboard';

import { HideContext, providerDashboard, } from '../../../contexts/HideContext';

import './main.css';

function Main() {
    const [hide, setHide] = useState(providerDashboard);
    const provider = {
		hide,
		setHide,
	};

    return (
        <main className="main">
            <HideContext.Provider value={ provider }>
                <ControlDashboard />
                <Dashboard />
            </HideContext.Provider>
        </main>
    );
}

export default Main;