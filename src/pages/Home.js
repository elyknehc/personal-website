import { red } from "@material-ui/core/colors";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePicture from "../files/Profilepic.jpg";
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
					<span style={{ color: "blue", fontWeight: "bold" }}>
						<Typewriter
							words={[
								"a CS Student @ Western University ",
								"an aspiring Software Developer",
								"a recreational runner",
								"a gamer, playing on the Western LoL Team ",
								"a cat lover",
							]}
							loop={true}
							typeSpeed={80}
							deleteSpeed={60}
							delaySpeed={1000}
						/>
					</span>
				</p>

				<span>
					<button className="button"> Download Resume </button>
				</span>

				<div className="prompt">
					<p>A software developer with a passion for learning and creating.</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
