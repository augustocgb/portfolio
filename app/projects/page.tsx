"use client";

import { useState, useMemo } from "react";
import { ProjectCard, ProjectCardProps } from "../components/ProjectCard";

const projects: ProjectCardProps[] = [
	/* Genetic Algorithm for Block Game */
  {
		title: "Genetic Algorithm for Block Game",
		description:
			"Developed an AI agent using a genetic algorithm to discover optimal strategies for a custom block placement puzzle game. The system simulates thousands of agents per generation, evolving their decision-making logic based on a fitness function that rewards efficient and high-scoring solutions. Key features include automated gameplay simulation, dynamic mutation and crossover, and a real-time visualizer to observe the evolution of strategies. Made in Python, using pygame for interactive visualization, matplotlib for analytics and progress tracking, and numpy for efficient numerical operations.",
		images: [
			{ src: "/images/blocks-ga.png", alt: "Block Game Genetic Algorithm 1" },
			{ src: "/images/blocks-ga-2.png", alt: "Block Game Genetic Algorithm 2" },
		],
		tech: ["Python", "pygame", "matplotlib", "numpy", "Genetic Algorithm", "AI"],
		category: "Artificial Intelligence",
		date: "2025-05-28",
		links: [
			{
				href: "https://github.com/augustocgb/blocks-ga",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "GitHub",
			},
		],
	},

  /* DeepPhish */
	{
		title: "DeepPhish",
		description:
			"Worked as part of a team to develop DeepPhish, an advanced cybersecurity consulting tool designed to predict and test phishing attacks. The project involved creating a sophisticated classification model to analyze and predict user behavior in response to phishing attempts based on their details and tech literacy, using machine learning and data analytics. Using these results, the tool utilizes self-hosted LLMs to generate personalized phishing emails, with varying difficulty levels, to simulate real-world phishing attacks and assess employee responses. An automated reporting system then generates a detailed PDF with insight into individual employees and provides recommendations. Made in 24 hours for Catapult Hacks.",
		images: [
			{ src: "/images/phish-1.png", alt: "DeepPhish 1" },
			{ src: "/images/phish-2.png", alt: "DeepPhish 2" },
			{ src: "/images/phish-3.png", alt: "DeepPhish 3" },
			{ src: "/images/phish-4.png", alt: "DeepPhish 4" },
		],
		tech: ["Python", "Google Apps Script", "SQLite", "OLLama", "Click CLI", "XGBoost Classification Model", "Google SMTP", "Cybersecurity"],
		category: "Cybersecurity",
		date: "2025-04-12",
		links: [
			{
				href: "https://github.com/ChristopherTrumpet/deepphish",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "GitHub",
			},
		],
	},

  /* Algorithms for Julia Sets */
	{
		title: "Algorithms for Julia Sets",
		description:
			"Developed both 2D and 3D visualizers for Julia sets and related fractals, utilizing rasterization and raymarching techniques, respectively. The project focuses on delivering an interactive and educational platform that allows users to explore the intricate mathematical properties of fractals in real time. Features include adjustable parameters for set generation, real-time feedback on escape rates, and visual explanations of the underlying mathematical concepts. Made with Unity with C# for the core logic and custom shader programming. This tool serves as both a learning resource and a demonstration of optimized rendering strategies for complex mathematical structures. Made for Purdue Experimental Mathematics Lab 2025 (PXML).",
		images: [
			{ src: "/images/julia-1.png", alt: "Julia Set 1" },
			{ src: "/images/julia-2.png", alt: "Julia Set 2" },
			{ src: "/images/julia-3.png", alt: "Julia Set 3" },
			{ src: "/images/julia-4.png", alt: "Julia Set 4" },
		],
		tech: ["C#", "Unity", "Shader Programming", "WebGL", "Fractals", "Dynamical Systems", "PXML"],
		category: "Visualization",
		date: "2025-04-26",
		links: [
			{
				href: "https://github.com/augustocgb/raymarch",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "Raymarch",
			},
			{
				href: "https://github.com/augustocgb/julia",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "Julia",
			},
			{
				href: "https://augustocgb.github.io/raymarch/",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm0 2h16v9H4V7zm5 12v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
					</svg>
				),
				label: "3D Demo",
			},
			{
				href: "https://augustocgb.github.io/julia/",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm0 2h16v9H4V7zm5 12v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
					</svg>
				),
				label: "2D Demo",
			},
		],
	},

  /* Stock Watchlist */
	{
		title: "Stock Watchlist",
		description:
			"Created a Python Flask web application that allows users to build and manage a personalized stock watchlist. The app leverages the yfinance library to fetch real-time stock prices and key financial data, providing up-to-date information for each ticker in the user's list. Users can add or remove stocks, view live updates, and customize their watchlist according to their interests. All user data and preferences are stored in a local JSON file, ensuring persistence across sessions without the need for a database. This project demonstrates seamless integration of Flask for backend logic, yfinance for data retrieval, and JSON for lightweight data storage.",
		images: [
			{ src: "/images/watchlist-1.png", alt: "Stock Watchlist 1" },
			{ src: "/images/watchlist-2.png", alt: "Stock Watchlist 2" },
		],
		tech: ["Python", "Flask", "JSON", "yfinance", "HTML/CSS"],
		category: "Finance",
		date: "2025-06-26",
		links: [
			{
				href: "https://github.com/augustocgb/stock-watchlist",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "GitHub",
			},
		],
	},

  /* Sentiment Trading Strategy */
	{
		title: "Sentiment Analysis Trading Strategy",
		description:
			"Developed and backtested a quantitative trading strategy that leverages Natural Language Processing (NLP) to capitalize on market sentiment. The project involved an automated Python pipeline that sourced daily news headlines for a universe of over 100 stocks using pygooglenews, performed sentiment analysis on each headline with NLTK's VADER model, and aggregated these scores monthly. A long-only portfolio was systematically constructed by selecting and rebalancing into the top 5 stocks with the highest positive sentiment each month. The entire backtesting framework, from data acquisition (yfinance) and cleaning to performance calculation and visualization, was built using Python with Pandas, NumPy, and Matplotlib.",
		images: [
			{ src: "/images/sentiment-1.png", alt: "Sentiment Analysis Trading Returns" },
			{ src: "/images/sentiment-2.png", alt: "Sentiment Analysis Data Scraping" },
		],
		tech: ["Python", "NLTK", "VADER", "Jupyter Notebook", "yfinance", "pandas", "pygooglenews", "matplotlib", "numpy", "scipy"],
		category: "Finance",
		date: "2025-07-09",
		links: [
			{
				href: "https://github.com/augustocgb/sentiment-investing",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "GitHub",
			},
		],
	},

	/* Portfolio Website */
	{
		title: "Portfolio Website",
		description:
			"You are here! Engineered and deployed a dynamic, fully responsive personal portfolio website from the ground up using Next.js and React, with a focus on creating a clean, modern user experience. Key functionalities include a theme-aware UI with seamless light/dark mode toggling, a secure contact form that leverages a custom API route for email delivery, and an interactive projects gallery with real-time search and filtering capabilities. The front-end was built with a custom library of reusable React components and styled with Tailwind CSS, ensuring a consistent and maintainable design system. The entire application is deployed on Vercel, utilizing its CI/CD pipeline for automated builds, hosting, and analytics.",
		images: [
			{ src: "/images/portfolio-web-1.png", alt: "Portfolio Website in Light Mode" },
			{ src: "/images/portfolio-web-2.png", alt: "Portfolio Website in Dark Mode" },
		],
		tech: ["Next.js", "React", "Tailwind CSS", "Web", "Resend", "Vercel"],
		category: "Visualization",
		date: "2025-05-21",
		links: [
			{
				href: "https://github.com/augustocgb/portfolio",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
				),
				label: "GitHub",
			},
			{
				href: "https://augustocgb.com",
				icon: (
					<svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
						<path d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm0 2h16v9H4V7zm5 12v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
					</svg>
				),
				label: "Website",
			}
		],
	},
];

const categories = Array.from(new Set(projects.map((p) => p.category)));

export default function ProjectsPage() {
	const [sort, setSort] = useState<'date' | 'category'>('date');
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');

	const filtered = useMemo(() => {
		let filtered = projects;
		if (search.trim()) {
			const q = search.toLowerCase();
			filtered = filtered.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q) ||
					p.tech.some((t) => t.toLowerCase().includes(q))
			);
		}
		if (category) {
			filtered = filtered.filter((p) => p.category === category);
		}
		if (sort === 'date') {
			filtered = [...filtered].sort((a, b) => b.date.localeCompare(a.date));
		} else if (sort === 'category') {
			filtered = [...filtered].sort((a, b) => a.category.localeCompare(b.category));
		}
		return filtered;
	}, [search, category, sort]);

	return (
		<div className="space-y-16 animate-fade-in">
			<h1 className="text-5xl font-bold mb-8 text-center">Work Examples</h1>
			<div className="max-w-2xl mx-auto flex flex-col items-center gap-4 mb-8 w-full">

				<input
					type="text"
					placeholder="Search projects..."
					value={search}
					onChange={e => setSearch(e.target.value)}
					className="px-3 py-2 rounded border-2 border-[--border] bg-[--bg-secondary] text-[--text-primary] focus:outline-none min-w-[220px] w-full shadow-md"
				/>

				<div className="flex flex-wrap gap-4 items-center justify-center w-full">

					<div className="flex items-center gap-2">
						<label className="text-sm opacity-70">Sort by: </label>
						<select
						value={sort}
						onChange={e => setSort(e.target.value as 'date' | 'category')}
						className="px-2 py-1 rounded border border-[--border] bg-[--bg-secondary] text-[--text-primary] focus:outline-none shadow-md"
						>
						<option value="date">Date</option>
						<option value="category">Category</option>
						</select>
					</div>

					<div className="flex items-center gap-2">
						<label className="text-sm opacity-70">Category: </label>
						<select
						value={category}
						onChange={e => setCategory(e.target.value)}
						className="px-2 py-1 rounded border border-[--border] bg-[--bg-secondary] text-[--text-primary] focus:outline-none shadow-md"
						>
						<option value="">All</option>
						{categories.map((cat) => (
						<option key={cat} value={cat}>{cat}</option>
						))}
						</select>
					</div>

				</div>
			</div>

			<div className="grid gap-8 md:grid-cols-1">
                {filtered.length > 0 ? (
                    filtered.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))
                ) : (
                    <div className="text-center py-16 text-[--text-primary]">
                        <p className="text-xl font-semibold">No projects found</p>
                        <p className="mt-2 opacity-80">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>

		</div>
	);
}