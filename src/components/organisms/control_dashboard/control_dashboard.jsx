import { useContext } from 'react';
import useIntersectionObserver from '../../../customhooks/useIntersectionObserver';

import { HideContext } from '../../../contexts/HideContext';

import UnorderedList from '../../molecules/unordered_list/unordered_list';

import './control_dashboard.css';

function ControlDashboard() {
    const { hide, setHide, } = useContext(HideContext);
    const { isIntersecting, target, }  = useIntersectionObserver({
        threshold: [0.5]
    });

    const handleClick = (event) => {
        if (event.target.tagName !== 'LI') return;

        const actions = {
            info: () => ({
				clientAttributes: !hide.clientAttributes
			}),
            dataObject: () => ({
				messagesMqtt: !hide.messagesMqtt
			}),
            edit: () => ({
				editSensor: !hide.editSensor
			}),
        }
        setHide({
            ...hide,
            ...actions[event.target.dataset.action](),
        });
        event.target.classList.toggle('color--8fa329');
    };
    
    const unorderedList = {
        itemLists: [
            {
				iconName: 'info',
				dataAction: 'info',
			},
            {
				iconName: 'edit',
				dataAction: 'edit',
			},
            {
				iconName: 'data_object',
				dataAction: 'dataObject',
			},
        ],
        onClick: handleClick,
        style: 'unordered_list--flex_row unordered_list--buttons',
    };
    const style = (isIntersecting !== null && !isIntersecting) && 'control_dashboard_fixed';

    return (
        <section ref={ target } className={ `${ style } control_dashboard` }>
            <UnorderedList attributes={ unorderedList } />
        </section>
    );
}

export default ControlDashboard;