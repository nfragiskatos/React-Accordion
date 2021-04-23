import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
	return (
		<main>
			<section className="question">
				<header>
					<h4>{question.title}</h4>
					<button className="btn">
						<AiOutlinePlus />
					</button>
				</header>
				<p>{question.info}</p>
			</section>
		</main>
	);
};

export default Question;
