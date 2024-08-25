"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineMail,
} from "react-icons/ai";

export default function Home() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<main className="content-center mt-5 flex flex-col items-center justify-center mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl relative">
			<div className="fixed bottom-4 right-4 md:absolute md:right-5 md:top-5">
				{currentTheme === "dark" ? (
					<button
						onClick={() => setTheme("light")}
						className="bg-slate-100 p-2 rounded-xl"
					>
						<RiSunLine size={25} color="black" />
					</button>
				) : (
					<button
						onClick={() => setTheme("dark")}
						className="bg-slate-100 p-2 rounded-xl"
					>
						<RiMoonFill size={25} />
					</button>
				)}
			</div>

			{/* Main Content */}
			<div className="mt-5 flex flex-col md:flex-row items-center justify-between">
				<div className="text-center md:text-left">
					<h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-3xl font-semibold mb-4">
						👋 Nice to meet you, I'm Kyle Chen
					</h1>
					<div className="flex justify-center md:justify-start space-x-4 mt-4">
						<a
							href="https://github.com/elyknehc"
							rel="noreferrer"
							target="_blank"
							className="transform hover:-translate-y-1 transition-transform"
						>
							<AiOutlineGithub
								className="text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/kyleechen"
							rel="noreferrer"
							target="_blank"
							className="transform hover:-translate-y-1 transition-transform"
						>
							<AiOutlineLinkedin
								className="text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a
							href="mailto:kylechen.hba2026@ivey.ca"
							rel="noreferrer"
							target="_blank"
							className="transform hover:-translate-y-1 transition-transform"
						>
							<AiOutlineMail
								className="text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
					</div>
				</div>
				<div className="mt-6 md:mt-0">
					<Image
						src="/Headshot2.jpg"
						alt="headshot"
						width={250}
						height={250}
						className="rounded-full md:ml-24"
					/>
				</div>
			</div>

			<div className="text-lg mt-8">
				I'm currently in my 4th year of my dual degree in{" "}
				<span className="font-bold">Computer Science </span> and{" "}
				<span className="font-bold">Business Administration </span> at the
				University of Western Ontario. I will be graduating in May, 2026!
				<div className="text-lg mt-5">
					Previously, I interned at <span className="font-bold">RBC </span>as a{" "}
					<span className="font-bold"> Software Developer Intern </span> in the
					Legal Technology team.
				</div>
				<div className="text-lg">
					I have also worked at <span className="font-bold">Blueguardian </span>{" "}
					as a <span className="font-bold"> Software Developer Intern</span>,
					developing their chatbot assistant.
				</div>
				<div className="mt-5">
					{" "}
					If you are interested, here are some of my previous{" "}
					<a
						href="/projects"
						className="text-blue-400 underline hover:text-blue-600"
						target="_blank"
					>
						projects.
					</a>
				</div>
				<div className="mt-5">
					{" "}
					Some things that I like to do in my free time:
					<div className="ml-10">
						<li>
							{" "}
							🍁 Being a huge Toronto Maple Leafs fan{" "}
							<span className="text-xs">Go Leafs Go! - #88 Willy</span>
						</li>
						<li> 🧑‍🍳 Trying out new recipes </li>
						<li> 🏃‍♂️ Going on runs </li>
						<li>
							{" "}
							📖 Learning about new technologies: currently learning about
							Machine Learning!{" "}
						</li>
					</div>
					<div className="mt-5 text-lg">
						Always happy to meet new people and chat, feel free to{" "}
						<a
							href="mailto:kylechen.hba2026@ivey.ca"
							className="text-blue-400 underline hover:text-blue-600"
						>
							reach out!
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
