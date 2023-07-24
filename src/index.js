import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import TextUtil from "./components/TextWizard";
import Footer from './components/Footer';
import './css/index.css';

ReactDOM.render(
	<React.StrictMode>
		<Navbar title="TextWizard" />
		<TextUtil />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

