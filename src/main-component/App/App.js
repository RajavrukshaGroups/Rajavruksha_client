import React, { useEffect } from 'react';
import AllRoute from '../router';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import 'aos/dist/aos.css';
import './App.css';
import '../../index.css';
//optimization level
const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
        });
    }, []);

    return (
        <div className="App body_wrap">
            <div className="toast-wrapper">
                <ToastContainer/>
            </div>
                {/* <TawkMessengerReact
                    propertyId="66d2d5ab50c10f7a00a26593"
                    widgetId="1i70srim4"
                    /> */}
                <AllRoute />
        </div>
          );
};

export default App;

