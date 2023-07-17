import './title.css';

function Title({ attributes }) {
    const { type, text, } = attributes;
    
    const title = {
        h1: <h1 className="h1">{ text }</h1>,
        h2: <h2 className="h2">{ text }</h2>,
        h3: <h3 className="h3">{ text }</h3>,
    };

    return title[type];
}

export default Title;