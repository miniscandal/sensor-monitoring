import Image from "../../atoms/image/image";
import Title from '../../atoms/title/title';

import logo from '../../../assets/img/logo.svg';
import './logo.css';

function Logo() {
    const title = {
		type: 'h1',
		text: 'SENSORS',
	};
    const image = {
		src: logo,
		alt: 'logo picture',
		style: 'image--low',
	};

    return (
        <section className="logo">
            <Title attributes={ title } />
            <div className="logo__section">
                <Image attributes={ image } />
            </div>
        </section>
    );
}

export default Logo;