import './icon.css';

function Icon({ attributes }) {
    const { name, style, } = attributes;
    
    return (
        <span className={ `${ style } icon material-symbols-outlined` }>
            { name }
        </span>
    );
}

export default Icon;