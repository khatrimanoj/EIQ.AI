import React from 'react';
import { createRoot } from "react-dom/client";

import App from 'src/pages/App';
import 'src/styles/app.css';

// const APP_ROOT = document.getElementById('app');

// ReactDOM.render(<App />, APP_ROOT);

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

