import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Typewriter } from "react-simple-typewriter";
import profilePicture from "../pictures/Profilepic.jpg";
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
					I am a {""}
					<Typewriter
						words={["developer", "runner", "gamer"]}
						loop={true}
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</p>

				<div className="prompt">
					<p>A software developer with a passion for learning and creating.</p>
					<LinkedInIcon
						className="icons"
						onClick={(event) =>
							window.open("https://www.linkedin.com/in/kyleechen/", "_blank")
						}
					/>
					<EmailIcon
						className="icons"
						onClick={(event) => (window.location = "mailto:kchen727@uwo.ca")}
					/>
					<GithubIcon
						className="icons"
						onClick={(event) =>
							window.open("https://github.com/elyknehc", "_blank")
						}
					/>
				</div>
			</div>
			<div className="skills">
				<h1> Technologies </h1>
				<p> Front-End: </p>

				<p> Languages: </p>
			</div>
		</div>
	);
}

export default Home;
