import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/AuthProvider';
import { ProfileProvider } from './context/ProfileContext';

/**
 * The root element where the entire React application is rendered.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the application within a strict mode and wrapped with an authentication provider.
 * StrictMode renders components twice to detect side-effects, providing helpful warnings.
 * The AuthProvider wraps the entire application to provide authentication context.
 */
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
