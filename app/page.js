import { getGitHubContributors, getGitHubStats } from "@/app/actions/github";
import { ContributorsShowcase } from "@/components/contributors-showcase";
import { PwaInstallButton } from "@/components/pwa-install-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ArrowRight,
    BookOpen,
    Brain,
    CheckCircle,
    Code,
    Database,
    Eye,
    GitBranch,
    GitFork,
    Github,
    Globe,
    Layers,
    Lightbulb,
    Rocket,
    Server,
    Settings,
    Shield,
    Star,
    TestTube,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
    // Fetch GitHub data
    const [contributors, githubStats] = await Promise.all([
        getGitHubContributors(),
        getGitHubStats(),
    ]);

    const curriculumSections = [
        {
            icon: <Code className="h-5 w-5" />,
            title: "Syntax & Semantics",
            description:
                "Master JavaScript fundamentals, variables, data types, functions, and React JSX syntax",
            topics: [
                "Variables & Data Types",
                "Functions & Arrow Functions",
                "Conditionals & Loops",
                "JSX & Components",
            ],
            href: "/reactive-accelarator#syntax-semantics",
            color: "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
        },
        {
            icon: <Database className="h-5 w-5" />,
            title: "Standard Library & Built-in APIs",
            description:
                "Learn core JavaScript APIs, Array methods, Object manipulation, and modern ES6+ features",
            topics: [
                "Array Methods",
                "Object Manipulation",
                "Promise & Async/Await",
                "ES6+ Features",
            ],
            href: "/reactive-accelarator",
            color: "bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400",
        },
        {
            icon: <Shield className="h-5 w-5" />,
            title: "Error Handling & Debugging",
            description:
                "Master debugging techniques, error boundaries, and testing strategies",
            topics: [
                "Try-Catch Blocks",
                "Error Boundaries",
                "Debugging Tools",
                "Console Methods",
            ],
            href: "/reactive-accelarator",
            color: "bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400",
        },
        {
            icon: <Zap className="h-5 w-5" />,
            title: "Performance Optimization",
            description:
                "Optimize React apps with memoization, lazy loading, and performance best practices",
            topics: [
                "React.memo",
                "useMemo & useCallback",
                "Code Splitting",
                "Bundle Optimization",
            ],
            href: "/reactive-accelarator",
            color: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400",
        },
        {
            icon: <Lightbulb className="h-5 w-5" />,
            title: "Design Patterns & Best Practices",
            description:
                "Learn industry-standard patterns, clean code principles, and architectural decisions",
            topics: [
                "Component Patterns",
                "Custom Hooks",
                "State Management",
                "Clean Code",
            ],
            href: "/reactive-accelarator",
            color: "bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400",
        },
        {
            icon: <Server className="h-5 w-5" />,
            title: "Asynchronous Programming",
            description:
                "Master async/await, promises, concurrency, and parallel processing",
            topics: [
                "Promises",
                "Async/Await",
                "Event Loop",
                "Concurrency Patterns",
            ],
            href: "/reactive-accelarator",
            color: "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400",
        },
        {
            icon: <Settings className="h-5 w-5" />,
            title: "Tooling & Ecosystem",
            description:
                "Learn modern development tools, bundlers, and the React ecosystem",
            topics: [
                "Webpack/Vite",
                "ESLint/Prettier",
                "Package Managers",
                "Build Tools",
            ],
            href: "/reactive-accelarator",
            color: "bg-gray-100 dark:bg-gray-950/50 text-gray-600 dark:text-gray-400",
        },
        {
            icon: <TestTube className="h-5 w-5" />,
            title: "Testing & Deployment",
            description:
                "Comprehensive testing strategies and deployment best practices",
            topics: [
                "Unit Testing",
                "Integration Testing",
                "E2E Testing",
                "CI/CD Pipelines",
            ],
            href: "/reactive-accelarator",
            color: "bg-teal-100 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
        },
        {
            icon: <Rocket className="h-5 w-5" />,
            title: "Project Experience",
            description:
                "Build real-world applications with guided examples and portfolio projects",
            topics: [
                "Todo App",
                "E-commerce Site",
                "Dashboard",
                "Full-Stack App",
            ],
            href: "/reactive-accelarator",
            color: "bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400",
        },
        {
            icon: <Brain className="h-5 w-5" />,
            title: "Language Internals & Execution",
            description:
                "Deep dive into JavaScript engine, memory management, and execution context",
            topics: [
                "Call Stack",
                "Memory Management",
                "Garbage Collection",
                "Event Loop",
            ],
            href: "/reactive-accelarator",
            color: "bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400",
        },
        {
            icon: <Layers className="h-5 w-5" />,
            title: "Software Architecture",
            description:
                "Learn system design, scalable architectures, and design principles",
            topics: [
                "MVC Pattern",
                "Component Architecture",
                "State Management",
                "Scalability",
            ],
            href: "/reactive-accelarator",
            color: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400",
        },
        {
            icon: <GitBranch className="h-5 w-5" />,
            title: "Git & Collaboration",
            description:
                "Master version control, team collaboration, and workflow management",
            topics: [
                "Git Basics",
                "Branching Strategy",
                "Pull Requests",
                "Code Review",
            ],
            href: "/reactive-accelarator",
            color: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
        },
    ];

    const stats = [
        {
            label: "GitHub Stars",
            value: githubStats.stargazers_count.toString(),
            icon: <Star className="h-4 w-4" />,
        },
        {
            label: "Forks",
            value: githubStats.forks_count.toString(),
            icon: <GitFork className="h-4 w-4" />,
        },
        {
            label: "Contributors",
            value: contributors.length.toString(),
            icon: <Users className="h-4 w-4" />,
        },
        {
            label: "Watchers",
            value: githubStats.watchers_count.toString(),
            icon: <Eye className="h-4 w-4" />,
        },
    ];

    const features = [
        {
            icon: <BookOpen className="h-6 w-6" />,
            title: "Comprehensive Curriculum",
            description:
                "16+ detailed sections covering everything from basics to advanced concepts",
        },
        {
            icon: <Code className="h-6 w-6" />,
            title: "Hands-on Projects",
            description:
                "Build real-world applications with step-by-step guidance",
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Community Driven",
            description:
                "Learn with a community of developers and contributors",
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Bilingual Content",
            description:
                "Available in both English and Bengali for better understanding",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* GitHub Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="relative py-3 px-4 flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-xs">⭐</span>
                            </div>
                            <span className="text-white/90 text-sm font-medium">
                                Star us on GitHub
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-4 text-xs text-white/70">
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span>
                                    {githubStats.stargazers_count} stars
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                <span>{githubStats.forks_count} forks</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="https://github.com/Deveripon/reactive-accelarator"
                            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white transition-all duration-300 hover:scale-105"
                        >
                            <Github className="h-4 w-4" />
                            <span className="hidden sm:inline">
                                View Repository
                            </span>
                            <span className="sm:hidden">Repo</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <button className="text-white/60 hover:text-white/80 transition-colors p-1">
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-md flex items-center justify-center">
                            <Rocket className="h-5 w-5 text-white" />
                        </div>
                        <Link href="/" className="font-bold text-xl">
                            Reactive Accelerator
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6">
                            <Link
                                href="/reactive-accelarator"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Documentation
                            </Link>
                            <Link
                                href="https://github.com/Deveripon/reactive-accelarator"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                GitHub
                            </Link>
                        </nav>
                        <ThemeToggle />
                        <Button asChild size="sm" className="hidden md:flex">
                            <Link href="/reactive-accelarator">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 md:py-32 container">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50 rounded-full px-4 py-2 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                            <Github className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Open-source React learning platform
                        </span>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground font-medium">
                                {githubStats.stargazers_count}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        একজন জাভাস্ক্রিপ্ট ফোকাসড{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            সফটওয়্যার ইঞ্জিনিয়ার
                        </span>{" "}
                        হওয়ার পূর্ণাঙ্গ রোডম্যাপ
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        A comprehensive roadmap to becoming a JavaScript-focused
                        software engineer with hands-on React projects, in-depth
                        tutorials, and real-world applications. Master
                        everything from syntax to system design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <Link href="/reactive-accelarator">
                                Start Learning
                                <BookOpen className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="https://github.com/Deveripon/reactive-accelarator">
                                <Github className="mr-2 h-5 w-5" />
                                View on GitHub
                            </Link>
                        </Button>
                        <PwaInstallButton />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10 text-center">
                                    <div className="flex justify-center mb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="font-bold text-xl text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Why Choose Reactive Accelerator?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Built by developers, for developers. Learn React and
                            JavaScript the right way with our proven
                            methodology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <Card
                                key={i}
                                className="group text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <CardHeader>
                                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contributors Showcase */}
            <ContributorsShowcase contributors={contributors} />

            {/* Comprehensive Curriculum */}
            <section className="container py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Complete Learning Path
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our comprehensive curriculum covers 12+ major topics
                        with hands-on projects, real-world examples, and
                        industry best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curriculumSections.map((section, i) => (
                        <Card
                            key={i}
                            className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                        >
                            <CardHeader>
                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${section.color}`}
                                >
                                    {section.icon}
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {section.title}
                                </CardTitle>
                                <CardDescription className="text-sm mb-4">
                                    {section.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-1">
                                    {section.topics.map((topic, j) => (
                                        <Badge
                                            key={j}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardFooter>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    asChild
                                    className="text-primary group-hover:bg-primary/10"
                                >
                                    <Link href={section.href}>
                                        Learn more
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Learning Path */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Your Learning Journey
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Follow our structured path from beginner to advanced
                            React developer
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    phase: "Foundation",
                                    topics: "JavaScript ES6+, React Basics, Component Architecture",
                                    duration: "2-3 weeks",
                                },
                                {
                                    phase: "Intermediate",
                                    topics: "State Management, Hooks, Performance Optimization",
                                    duration: "3-4 weeks",
                                },
                                {
                                    phase: "Advanced",
                                    topics: "Testing, Deployment, System Design, Best Practices",
                                    duration: "4-5 weeks",
                                },
                                {
                                    phase: "Expert",
                                    topics: "Real Projects, Open Source Contribution, Portfolio Building",
                                    duration: "Ongoing",
                                },
                            ].map((phase, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-6 bg-card rounded-lg border"
                                >
                                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {phase.phase} Level
                                        </h3>
                                        <p className="text-muted-foreground mb-2">
                                            {phase.topics}
                                        </p>
                                        <Badge variant="outline">
                                            {phase.duration}
                                        </Badge>
                                    </div>
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 shadow-xl">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to accelerate your React journey?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Join thousands of developers who have mastered
                                React with our comprehensive learning platform.
                                Start your journey today and become a confident
                                React developer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/reactive-accelarator">
                                        Start Learning Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-blue-600"
                                    asChild
                                >
                                    <Link href="https://github.com/Deveripon/reactive-accelarator">
                                        <Github className="mr-2 h-5 w-5" />
                                        Contribute on GitHub
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-20">
                <div className="container">
                    {/* Course Details */}
                    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-blue-950/30 rounded-2xl p-8 mb-8 border border-blue-100 dark:border-blue-900/30 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <div className="text-center max-w-3xl mx-auto relative z-10">
                            <div className="inline-flex items-center gap-2 bg-blue-100/50 dark:bg-blue-900/50 rounded-full px-4 py-1.5 mb-4">
                                <img
                                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                    alt="Learn with Sumit"
                                    className="w-5 h-5 rounded-full"
                                    crossOrigin="anonymous"
                                />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                    Learn with Sumit
                                </span>
                            </div>

                            <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">
                                বাংলা রিয়্যাক্ট-নেক্সট জেএস কোর্স
                            </h3>
                            <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                রিয়্যাক্টিভ এক্সিলারেটর
                            </h4>
                            <p className="text-muted-foreground mb-6">
                                রিয়্যাক্ট জে.এস ভার্সন 18-19 & নেক্সট জে.এস
                                ভার্সন 14-15
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-6">
                                <div className="bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                                    <Code className="h-4 w-4 text-blue-500" />
                                    <span className="text-sm font-medium">
                                        React 18-19
                                    </span>
                                </div>
                                <div className="bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-purple-500" />
                                    <span className="text-sm font-medium">
                                        Next.js 14-15
                                    </span>
                                </div>
                                <div className="bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-green-500" />
                                    <span className="text-sm font-medium">
                                        বাংলা কোর্স
                                    </span>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                asChild
                            >
                                <Link
                                    href="https://learnwithsumit.com/rnext"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    কোর্স দেখুন
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t mt-auto bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="container py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                                    <Rocket className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Reactive Accelerator
                                    </span>
                                    <p className="text-sm text-muted-foreground">
                                        Learn React the right way
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                                A comprehensive React learning platform designed
                                to accelerate your journey from beginner to
                                expert developer. Master JavaScript, React, and
                                modern web development with hands-on projects
                                and real-world examples.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com/Deveripon/reactive-accelarator"
                                    className="group flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110"
                                >
                                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                </Link>
                                <Link
                                    href="https://github.com/Deveripon"
                                    className="group flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110"
                                >
                                    <Users className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                </Link>
                            </div>
                        </div>

                        {/* Learning Resources */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                Learning
                            </h3>
                            <div className="space-y-3">
                                {[
                                    {
                                        name: "Getting Started",
                                        href: "/reactive-accelarator",
                                    },
                                    {
                                        name: "Documentation",
                                        href: "/reactive-accelarator",
                                    },
                                    {
                                        name: "Tutorials",
                                        href: "/reactive-accelarator",
                                    },
                                    {
                                        name: "Projects",
                                        href: "/reactive-accelarator",
                                    },
                                    {
                                        name: "Best Practices",
                                        href: "/reactive-accelarator",
                                    },
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Community & Support */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                Community
                            </h3>
                            <div className="space-y-3">
                                {[
                                    {
                                        name: "GitHub Repository",
                                        href: "https://github.com/Deveripon/reactive-accelarator",
                                    },
                                    {
                                        name: "Contributors",
                                        href: "https://github.com/Deveripon/reactive-accelarator/graphs/contributors",
                                    },
                                    {
                                        name: "Issues & Bugs",
                                        href: "https://github.com/Deveripon/reactive-accelarator/issues",
                                    },
                                    {
                                        name: "Feature Requests",
                                        href: "https://github.com/Deveripon/reactive-accelarator/issues/new",
                                    },
                                    {
                                        name: "Author Profile",
                                        href: "https://github.com/Deveripon",
                                    },
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="border-t border-b py-8 mb-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                {
                                    label: "GitHub Stars",
                                    value: `${githubStats.stargazers_count}+`,
                                    icon: <Star className="h-5 w-5" />,
                                    color: "text-yellow-500",
                                },
                                {
                                    label: "Forks",
                                    value: `${githubStats.forks_count}+`,
                                    icon: <GitFork className="h-5 w-5" />,
                                    color: "text-blue-500",
                                },
                                {
                                    label: "Contributors",
                                    value: `${contributors.length}+`,
                                    icon: <Users className="h-5 w-5" />,
                                    color: "text-green-500",
                                },
                                {
                                    label: "Learning Topics",
                                    value: "12+",
                                    icon: <BookOpen className="h-5 w-5" />,
                                    color: "text-purple-500",
                                },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div
                                        className={`${stat.color} mb-2 flex justify-center`}
                                    >
                                        {stat.icon}
                                    </div>
                                    <div className="font-bold text-2xl mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <p className="text-sm text-muted-foreground">
                                © {new Date().getFullYear()} Reactive
                                Accelerator. Created with ❤️ by{" "}
                                <Link
                                    href="https://github.com/Deveripon"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Deveripon
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <Link
                                href="/reactive-accelarator"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/reactive-accelarator"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="https://github.com/Deveripon/reactive-accelarator/blob/main/LICENSE"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                MIT License
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
