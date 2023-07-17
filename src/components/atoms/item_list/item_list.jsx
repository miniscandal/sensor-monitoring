import './item_list.css';

function ItemList({ attributes, children, }) {
    const { dataAction } = attributes;
    
    return (
        <li className="item_list" data-action={ dataAction }>
            { children }
        </li>
    );
}

export default ItemList;