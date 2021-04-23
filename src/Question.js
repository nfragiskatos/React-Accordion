import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
	const [ isCollapsed, setIsCollapsed ] = useState(true);
	return (
		<main>
			<section className="question">
				<header>
					<h4>{question.title}</h4>
					<button className="btn" onClick={() => setIsCollapsed(!isCollapsed)}>
						{isCollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
					</button>
				</header>
				<p>{isCollapsed ? '' : question.info}</p>
			</section>
		</main>
	);
};

export default Question;
