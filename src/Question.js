import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
	const [ isCollapsed, setIsCollapsed ] = useState(true);
	return (
		<section className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setIsCollapsed(!isCollapsed)}>
					{isCollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
				</button>
			</header>
			<p>{isCollapsed ? '' : info}</p>
		</section>
	);
};

export default Question;
