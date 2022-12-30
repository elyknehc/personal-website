import React from "react";
import "../styles/Technologies.css";

function Technologies() {
	return (
		<div className="technology">
			<div className="technology-stack-content">
				<div className="technology-stack-box">
					<h2>Languages: </h2>
					<p> HTML5</p>
					<p> CSS3 </p>
					<p> Javascript </p>
					<p> Python </p>
					<p> Java </p>
					<p> C </p>
					<p> Prolog </p>
				</div>
				<div className="technology-stack-box">
					<h2>Frameworks / Libraries </h2>
					<p> React.js </p>
					<p> Node.js </p>
					<p> MongoDB </p>
				</div>
				<div className="technology-stack-box">
					<h2> Developer Tools </h2>
					<p> VSCode</p>
					<p> Eclipse </p>
					<p> Git</p>
				</div>
			</div>
			<h2> Always open to learning more! </h2>
		</div>
	);
}

export default Technologies;
