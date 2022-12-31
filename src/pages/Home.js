import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePicture from "../files/Profilepic.jpg";
import Kyle_Chen_Resume from "../files/resume.pdf";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="about">
				<img
					className="portrait"
					src={profilePicture}
					alt="Myself"
					draggable="false"
				/>
				<h2> Hello, I'm Kyle Chen. </h2>
				<p className="prompt">
					I am {""}
					<span style={{ color: "#5fb3f8", fontWeight: "bold" }}>
						<Typewriter
							words={[
								"a CS and Business Student @ Western University.",
								"an aspiring Software Developer.",
								"a recreational runner.",
								"a collegiate esports player.",
								"a cat lover.",
							]}
							loop={true}
							typeSpeed={75}
							deleteSpeed={80}
							delaySpeed={100}
						/>
					</span>
				</p>

				<span>
					<button
						className="button"
						onClick={(event) => window.open(Kyle_Chen_Resume, "_blank")}
					>
						Download Resume
					</button>
				</span>

				<div className="prompt">
					<p>A software developer with a passion for learning and creating.</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
