import { ExternalLink, GitCommit, Github, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function ContributorsShowcase({ contributors }) {
    const totalContributions = contributors.reduce(
        (sum, contributor) => sum + contributor.contributions,
        0
    );

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Users className="h-4 w-4" />
                        Open Source Community
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Built by Amazing{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Contributors
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Reactive Accelerator is made possible by our incredible
                        community of developers who contribute their time,
                        knowledge, and expertise to help others learn React.
                    </p>

                    {/* Community Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border">
                            <Users className="h-4 w-4 text-blue-500" />
                            <span className="font-semibold">
                                {contributors.length}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                Contributors
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border">
                            <GitCommit className="h-4 w-4 text-green-500" />
                            <span className="font-semibold">
                                {totalContributions.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                Contributions
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contributors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
                    {contributors.map((contributor, index) => (
                        <Card
                            key={contributor.id}
                            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                        >
                            <CardContent className="p-4 text-center">
                                <div className="relative mb-3">
                                    <Image
                                        src={
                                            contributor.avatar_url ||
                                            "/placeholder.svg"
                                        }
                                        width={500}
                                        height={500}
                                        alt={`${contributor.login}'s avatar`}
                                        className="w-16 h-16 rounded-full mx-auto border-2 border-emerald-400 shadow-lg group-hover:border-primary transition-colors"
                                        crossOrigin="anonymous"
                                    />
                                    {index === 0 && (
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                            <span className="text-xs">👑</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                    {contributor.login}
                                </h3>

                                <div className=" items-center gap-2">
                                    <Badge
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {contributor.contributions} commits
                                    </Badge>
                                    <Link
                                        href={contributor.html_url}
                                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors "
                                    >
                                        <Github className="h-3 w-3 " />
                                        View Profile
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Join Our Community
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Want to contribute to Reactive Accelerator? We
                            welcome contributions of all kinds - from fixing
                            typos to adding new tutorials and features.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                asChild
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                <Link href="https://github.com/Deveripon/reactive-accelarator">
                                    <Github className="mr-2 h-5 w-5" />
                                    View Repository
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="border-blue-50 text-blue-200 hover:bg-white hover:text-blue-600"
                                asChild
                            >
                                <Link href="https://github.com/Deveripon/reactive-accelarator/issues">
                                    <ExternalLink className="mr-2 h-5 w-5" />
                                    Report Issues
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
