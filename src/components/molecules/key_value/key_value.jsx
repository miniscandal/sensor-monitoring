import Paragraph from '../../atoms/paragraph/paragraph';

import './key_value.css';

function KeyValue({ attributes }) {
    const { key, value, style, } = attributes;
    const paragraphs = {
        key: {
			text: key.text,
			style: 'font--bold',
		},
        value: {
			text: value.text,
			style: `${ value.style } font--bold`,
		},
    }

    return (
        <div className={ `${ style } key_value` }>
            <Paragraph attributes={ paragraphs.key } />
            <Paragraph attributes={ paragraphs.value } />
        </div>
    );
}

export default KeyValue;