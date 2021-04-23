import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App () {
	return (
		<main>
			<section className="container">
				<h3>Questions and answers about login</h3>
				<div>
					{data.map((q) => {
						return <SingleQuestion question={q} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
