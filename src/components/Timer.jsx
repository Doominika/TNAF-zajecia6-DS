import React, { useEffect, useState } from 'react';

function Timer({ initialState }) {
	const [counter, setCounter, start, zero] = useState(initialState);

	useEffect(() => {
		if (counter !== 0) {
			const timeout = setTimeout(() => {
				setCounter(prevState => prevState - 1);
			}, 1000);

			return () => clearTimeout(timeout);
		}
	});

	return <div> {counter !== 0 ? `Counter: ${counter}` : 'Koniec czasu'} </div>;
}

export { Timer };
