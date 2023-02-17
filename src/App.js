import './App.css';
import { Form } from './components/Form';

function App() {
    return (
        <div className="App">
            <div className="image">
                <div className="image_box">
                    <img src="/assets/login_image.svg" alt="" />
                </div>
            </div>

            <Form />
        </div>
    );
}

export default App;
