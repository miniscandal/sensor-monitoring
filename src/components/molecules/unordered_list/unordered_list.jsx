import ItemList from '../../atoms/item_list/item_list';
import Icon from '../../atoms/icon/icon';

import './unordered_list.css';

function UnorderedList({ attributes }) {
    const { itemLists, onClick, style, dataPayload, } = attributes;
    const ul = {
		'data-payload': JSON.stringify(dataPayload)
	};

    const elements = itemLists.map(itemList => {
        const icon = { name: itemList.iconName, style: 'icon--low', };

        return (
            <ItemList key={ itemList.dataAction } attributes={ itemList }>
                <Icon attributes={ icon } />
            </ItemList>
        );
    });

    return (
        <ul className={ `${ style } unordered_list` } onClick={ onClick } { ...ul }>
            { elements }
        </ul>
    );
}

export default UnorderedList;