import React from "react";
import "../styles/globals.css";
import ProjectsSection from "@/components/ProjectsSection";

const projects = () => {
	return (
		<main className="content-center flex flex-col items-center justify-center mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<ProjectsSection />
		</main>
	);
};

export default projects;
