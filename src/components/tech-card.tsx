function TechCard({ text, col }: { text: string; col: string }) {
  return (
    <div className="group relative px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium text-sm sm:text-base">
        {text}
      </span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}

export default TechCard;
