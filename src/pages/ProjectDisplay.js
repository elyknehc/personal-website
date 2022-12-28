import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../files/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
	const { id } = useParams();
	const project = projectList[id];
	return (
		<div className="project">
			<h1> {project.name} </h1>
			<img src={project.image} alt="project" />
			<p>
				<strong>Skills: {project.skills}</strong>
			</p>
			<GitHubIcon
				className="icon"
				onClick={(event) => window.open(project.link, "_blank")}
			/>
		</div>
	);
}

export default ProjectDisplay;
