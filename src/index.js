import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Timer } from './components/Timer';
import './index.css';

function App() {
	const [showTimer, setShowtimer, start, zero] = useState(false);
	const handleClick = () => setShowtimer(!showTimer);



	return (
		<>
			<button onClick={() => handleClick()}>{showTimer ? 'Hide timer' : 'Show timer'} </button>
			{showTimer && <Timer initialState={10} />}
			<button onClick={() => handleClick()}>{start ? 'Start' : 'Stop'} </button>

		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode>
	//	<div> xxx </div>
	//</React.StrictMode>
	<App />
);
