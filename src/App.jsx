import Logo from './components/molecules/logo/logo';
import Main from './components/organisms/main/main';

import './app.css';

function App() {

    return (
        <div className="App">
            <header>
            	<Logo />
        	</header>
            <Main />
        </div>
    );
}

export default App;