/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Whos That Pokemon",
		description:
			"Whos That Pokemon is a full-stack game that tests your knowledge of Pokemon. You can save pokemon with a login and learn more about the pokemon that you did not know.  Created with React.js, Next.js, Tailwind CSS.",
		image: "/whosthatpokemon.png",
		github: "https://github.com/elyknehc/whosthatpokemon",
		link: "https://pokemon2-0-elyknehc.vercel.app/",
	},
	{
		name: "Hack Western 11 Platform",
		description:
			"Hack Western 11 Platform is a platform that allows users to register for Hack Western 11, view the schedule, and view the sponsors. Created with tRPC, PostgreSQL, Tailwind.",
		image: "/hackwestern11.png",
		github: "https://github.com/hackwestern/hackwestern",
		link: "https://github.com/hackwestern/hackwestern",
	},
	{
		name: "Westernflow",
		description:
			"Westernflow is a site that helps Western University students with course selection and course reviews. Created with React.js, Go, MongoDB.",
		image: "/westernflow.png",
		github: "https://github.com/westernflow/westernflow",
		link: "https://github.com/westernflow/westernflow",
	},
	{
		name: "Western Maps",
		description:
			"Western Maps is a GIS system that displays floorplans of various buildings on campus and allows users to mark down points of interest. Created with Java, Java Swing.",
		image: "/westernmaps.png",
		github: "https://github.com/elyknehc/CampusNavigator",
		link: "https://github.com/elyknehc/CampusNavigator",
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>

			<div className="flex flex-col space-y-28 mb-8">
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<div className="flex flex-col md:flex-row md:space-x-12">
								<div className=" md:w-1/2">
									<Link href={project.link}>
										<img
											src={project.image}
											alt=""
											width={500}
											height={500}
											className="rounded-xl shadow-xl"
										></img>
									</Link>
								</div>
								<div className="mt-8 md:w-1/2">
									<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
									<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
										{project.description}
									</p>
									<div className="flex flex-row align-bottom space-x-4">
										<Link href={project.github} target="_blank">
											<BsGithub size={30} className="cursor-pointer" />
										</Link>
										<Link href={project.link} target="_blank">
											<BsArrowUpRightSquare
												size={30}
												className="cursor-pointer"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
