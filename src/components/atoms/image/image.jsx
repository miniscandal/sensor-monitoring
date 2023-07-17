import './image.css';

function Image({ attributes }) {
    const { src, alt, style, } = attributes;
    
    return (
        <img
            className={ `${ style } image` }
            src={ src }
            alt={ alt }
            fetchpriority="high"
        />
    );
}

export default Image;