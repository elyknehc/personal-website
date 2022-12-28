import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { projectList } from "../files/ProjectList";

function Projects() {
	return (
		<div className="projects">
			<div className="projectList">
				{projectList.map((project, index) => {
					return (
						<ProjectItem name={project.name} image={project.image} id={index} />
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
