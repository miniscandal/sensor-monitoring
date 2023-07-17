import Icon from "../atoms/icon";
import Title from "../atoms/title";

import '../../assets/css/molecules/icon_title.css';

function IconTitle({ icon, text, style, }) {
    const title = {
		type: 'h3',
		text,
	};

    return (
        <div className={ `${ style } icon_title` }>
            <Icon { ...icon } />
            <Title { ...title } />
        </div>
    );
}

export default IconTitle;