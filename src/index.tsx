import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n/config'
import { BrowserRouter as Router }  from 'react-router-dom';
import YourThemeProvider from './components/directionLanguage/YourThemeProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<Router>
<YourThemeProvider>
    <App />
    </YourThemeProvider>
    </Router>

  </React.StrictMode>
);

