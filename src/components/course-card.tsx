function CourseCard({ text }: { text: string }) {
  return (
    <div className="group relative px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300 font-medium text-sm sm:text-base">
        {text}
      </span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}

export default CourseCard;
