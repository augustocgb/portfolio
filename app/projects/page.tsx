"use client"
import { useState, useMemo } from "react";
import { ProjectCard, ProjectCardProps } from "../components/ProjectCard";
import { FaFilter, FaSortAmountDown, FaSearch, FaGithub, FaGlobe, FaExternalLinkAlt, FaChartLine, FaCode } from 'react-icons/fa';

const projects: ProjectCardProps[] = [
	/* Stochastic Web Browser */
	{
		title: "Stochastic Web Browser",
		description:
			"The Stochastic Web Browser is an experimental web application that simulates a browsing experience where the internet doesn't exist until you ask for it. Instead of fetching real websites, it uses the Google Gemini API to hallucinate search results and generate complete, functional HTML web pages in real-time based on your queries. Features include a generative search engine, dual modes (Fast/Fancy) for page generation, a library system to save/download pages as HTML content, and simulated interactivity where forms and links continue the generative journey. Built with a No-Build React setup for instant prototyping.",
		images: [
			{ src: "/images/genai-browser-1.png", alt: "Stochastic Web Browser Interface" },
			{ src: "/images/genai-browser-2.png", alt: "AI Generated Website Example" },
		],
		tech: ["React", "Tailwind CSS", "Node.js", "Vercel", "Google Gemini API", "Vercel"],
		category: "Artificial Intelligence",
		date: "2025-11-10",
		links: [
			{
				href: "https://github.com/augustocgb/genai-browser",
				icon: <FaGithub className="w-5 h-5" />,
				label: "GitHub",
			},
			{
				href: "https://stochastic-web.augustocgb.com/",
				icon: <FaGlobe className="w-5 h-5" />,
				label: "Live Demo",
			},
		],
	},

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
				icon: <FaGithub className="w-5 h-5" />,
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
				icon: <FaGithub className="w-5 h-5" />,
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
				icon: <FaGithub className="w-5 h-5" />,
				label: "Raymarch",
			},
			{
				href: "https://github.com/augustocgb/julia",
				icon: <FaGithub className="w-5 h-5" />,
				label: "Julia",
			},
			{
				href: "https://augustocgb.github.io/raymarch/",
				icon: <FaExternalLinkAlt className="w-5 h-5" />,
				label: "3D Demo",
			},
			{
				href: "https://augustocgb.github.io/julia/",
				icon: <FaExternalLinkAlt className="w-5 h-5" />,
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
				icon: <FaGithub className="w-5 h-5" />,
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
				icon: <FaGithub className="w-5 h-5" />,
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
				icon: <FaGithub className="w-5 h-5" />,
				label: "GitHub",
			},
			{
				href: "https://augustocgb.com",
				icon: <FaGlobe className="w-5 h-5" />,
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
		<div className="space-y-16 animate-fade-in pt-12">
			<h1 className="text-5xl font-bold mb-8 text-center">Work Examples</h1>
			<div className="max-w-2xl mx-auto flex flex-col items-center gap-4 mb-8 w-full">

				<div className="relative w-full text-[--text-secondary]">
					<div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
						<FaSearch className="w-5 h-5" />
					</div>
					<input
						type="text"
						placeholder="Search projects..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="pl-10 pr-4 py-2 rounded-lg border-2 border-[--border] bg-[--bg-secondary] text-[--text-primary] focus:outline-none w-full shadow-md transition-all duration-200 focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20"
					/>
				</div>

				<div className="flex flex-wrap gap-4 items-center justify-center w-full">

					<div className="flex items-center gap-2 bg-[--bg-secondary] px-3 py-1.5 rounded-lg border-none outline-none ring-0 focus:ring-0">
						<FaSortAmountDown className="w-4 h-4 text-[--text-secondary]" />
						<label className="text-sm opacity-70 whitespace-nowrap">Sort by:</label>
						<select
						value={sort}
						onChange={e => setSort(e.target.value as 'date' | 'category')}
						className="bg-[--bg-secondary] text-[--text-primary] focus:outline-none focus:ring-0 border-none outline-none ring-0 cursor-pointer"
						>
						<option value="date" className="bg-[--bg-secondary] text-[--text-primary]">Date</option>
						<option value="category" className="bg-[--bg-secondary] text-[--text-primary]">Category</option>
						</select>
					</div>

					<div className="flex items-center gap-2 bg-[--bg-secondary] px-3 py-1.5 rounded-lg border-none outline-none ring-0 focus:ring-0">
						<FaFilter className="w-4 h-4 text-[--text-secondary]" />
						<label className="text-sm opacity-70 whitespace-nowrap">Category:</label>
						<select
						value={category}
						onChange={e => setCategory(e.target.value)}
						className="bg-[--bg-secondary] text-[--text-primary] focus:outline-none focus:ring-0 border-none outline-none ring-0 cursor-pointer"
						>
						<option value="" className="bg-[--bg-secondary] text-[--text-primary]">All</option>
						{categories.map((cat) => (
						<option key={cat} value={cat} className="bg-[--bg-secondary] text-[--text-primary]">{cat}</option>
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