import React from 'react';
import { createRoot } from 'react-dom';
import FetchData from './FetchData';

const root = document.getElementById('root'); // Assuming you have a <div id="root"></div> in your HTML

const reactRoot = createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <FetchData />
    </React.StrictMode>
);
