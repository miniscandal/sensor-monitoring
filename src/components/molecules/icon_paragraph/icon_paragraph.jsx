import Icon from "../../atoms/icon/icon";
import Paragraph from "../../atoms/paragraph/paragraph";

import './icon_paragraph.css';

function IconParagraph({ attributes }) {
    const { icon, text, style, } = attributes;
    const paragraph = {
		text,
		style: 'paragraph--dark',
	};

    return (
        <div className={ `${ style }` }>
            <Icon attributes={ icon } />
            <Paragraph attributes={ paragraph } />
        </div>
    );
}

export default IconParagraph;