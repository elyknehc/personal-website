import React from "react";
import Image from "next/image";
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineLinkedin,
	AiOutlineYoutube,
} from "react-icons/ai";

export default function Home() {
	return (
		<main className="content-center mt-5 flex flex-col items-center justify-center mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<div className="mt-5 text-3xl font-semibold flex items-center">
				<div>
					👋 Nice to meet you, I'm Kyle Chen
					<div className="flex flex-row items-center mt-4 ml-8 space-x-2 mb-1">
						<a
							href="https://github.com/elyknehc"
							rel="noreferrer"
							target="_blank"
						>
							<AiOutlineGithub
								className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/kyleechen"
							rel="noreferrer"
							target="_blank"
						>
							<AiOutlineLinkedin
								className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
								size={30}
							/>
						</a>
					</div>
				</div>
				<Image
					src="/Headshot2.jpg"
					alt="headshot"
					width={250}
					height={250}
					className="ml-36 rounded-full"
				/>
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
					as a software developer intern, helping with their chatbot technology.
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
							reach out
						</a>
						!
					</div>
				</div>
			</div>
		</main>
	);
}
