import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider} from './context/AuthContext.js'
import { SearchContextProvider } from './context/SearchContext.js';
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
