import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import TextUtil from "./components/TextWizard";
import Footer from './components/Footer';
import './css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Navbar title="TextWizard" />
		<TextUtil />
		<Footer />
	</React.StrictMode>
);

