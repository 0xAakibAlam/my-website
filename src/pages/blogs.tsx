import { BlogCard } from "../components/blogCard";
import { usePostInfoByTokenAddress } from "../services/marketPlaceService";
import { useState, useEffect } from "react";

function Blogs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("blogs-grid");
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const blogs = [
        {
            index: 6,
            tag: "Bitcoin"
        },
        {
            index: 7,
            tag: "Bitcoin"
        },
        {
            index: 8,
            tag: "Bitcoin"
        },
    ];

    // Separate loading, error, and success states
    const blogStates = blogs.map((blog) => {
        const { postInfo, isLoading, isError, error } = usePostInfoByTokenAddress(blog.index.toString());
        
        // Log for debugging
        if (error) {
            console.error(`Error loading blog ${blog.index}:`, error);
        }
        if (isError) {
            console.warn(`Blog ${blog.index} failed to load`);
        }
        
        return {
            blog,
            postInfo,
            isLoading,
            isError,
            error
        };
    });

    const loadingCount = blogStates.filter(state => state.isLoading).length;
    const successCount = blogStates.filter(state => !state.isLoading && !state.isError && state.postInfo).length;
    const hasAnyLoading = loadingCount > 0;
    const hasAnySuccess = successCount > 0;

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
            {/* Hero Section */}
            <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            My Blogs
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Exploring blockchain, cryptography, and the future of decentralized technology.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mt-8"></div>
                </div>
            </section>

            {/* Blogs Grid Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Loading State - All Loading */}
                    {hasAnyLoading && !hasAnySuccess && (
                        <div className="text-center py-16">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
                            <p className="text-gray-400 text-lg">Loading blogs...</p>
                        </div>
                    )}

                    {/* Empty State */}
                    {!hasAnyLoading && !hasAnySuccess && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📝</div>
                            <h2 className="text-2xl font-semibold text-gray-300 mb-2">No blogs found</h2>
                            <p className="text-gray-500">Check back later for new content.</p>
                        </div>
                    )}

                    {/* Blogs Grid */}
                    <div
                        id="blogs-grid"
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {blogStates.map((state, index) => {
                            const { blog, postInfo, isLoading, isError } = state;
                            
                            // Show loading skeleton
                            if (isLoading) {
                                return (
                                    <div
                                        key={blog.index}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                        className="transition-all duration-1000"
                                    >
                                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300">
                                            <div className="animate-pulse">
                                                {/* Image skeleton */}
                                                <div className="h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50"></div>
                                                {/* Content skeleton */}
                                                <div className="p-4 space-y-4">
                                                    {/* Title skeleton */}
                                                    <div className="space-y-2">
                                                        <div className="h-6 bg-gray-700/50 rounded w-3/4"></div>
                                                        <div className="h-6 bg-gray-700/50 rounded w-1/2"></div>
                                                    </div>
                                                    {/* Description skeleton */}
                                                    <div className="space-y-2">
                                                        <div className="h-4 bg-gray-700/50 rounded"></div>
                                                        <div className="h-4 bg-gray-700/50 rounded w-5/6"></div>
                                                        <div className="h-4 bg-gray-700/50 rounded w-4/5"></div>
                                                    </div>
                                                    {/* Bottom section skeleton */}
                                                    <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-4 w-4 bg-gray-700/50 rounded"></div>
                                                            <div className="h-4 bg-gray-700/50 rounded w-20"></div>
                                                        </div>
                                                        <div className="h-9 bg-gray-700/50 rounded w-20"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            
                            // Skip error or missing data
                            if (isError || !postInfo) {
                                return null;
                            }
                            
                            // Map contract response to Asset format
                            const asset = {
                                postId: blog.index,
                                postTitle: postInfo.postTitle,
                                description: postInfo.description,
                                thumbnailCid: postInfo.thumbnailCid,
                                author: postInfo.author,
                                publishedAt: undefined,
                            };
                            
                                return (
                                    <div
                                        key={blog.index}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                        className="transition-all duration-1000"
                                    >
                                    <BlogCard asset={asset} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;