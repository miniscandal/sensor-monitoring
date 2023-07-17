import { useState } from 'react';
import useIntersectionObserver from '../../../../../customhooks/useIntersectionObserver';

import { HideContext, providerShell, } from '../../../../../contexts/HideContext';

import Help from '../help/help';
import MenuBar from '../menu_bar/menu_bar';
import CommandInput from '../command_input/command_input';

import './shell.css';

function Shell() {
    const { isIntersecting, target, } = useIntersectionObserver({
		threshold: [0.99]
	});
    const [stateHide, setStateHide] = useState(providerShell);
    const provider = { stateHide, setStateHide };
    const condition = (isIntersecting !== null) && !isIntersecting;
    const style = (condition && stateHide.shellSticky) && 'shell_sticky';

    return (
        <div ref={ target } className={ `${ style } shell` }>
            <HideContext.Provider value={ provider }>
                <MenuBar />
                <Help />
                <CommandInput />
            </HideContext.Provider>
        </div>
    );
}

export default Shell;