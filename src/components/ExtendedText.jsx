import React, { useState } from 'react';

export function ExtendedText({ initialText, expandedText }) {
	const [showMore, setShowMore] = useState(false);

	function handleShowMore ()  {
		setShowMore(!showMore);
	};

	return (
		<>
			{initialText}
			{showMore && <span>{expandedText}</span>}
			<br />
			<button onClick={handleShowMore}>{showMore ? 'Ler menos' : 'Ler mais'}</button>
		</>
	);
}
