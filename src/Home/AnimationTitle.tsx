interface AnimationTitleProps {
  title: string;
}

const AnimationTitle: React.FC<AnimationTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="transform rotate-[4deg] text-center font-mono transition-transform duration-500 hover:rotate-[-5deg]">
        <p className="text-3xl md:text-4xl font-bold text-black mb-1">
          {title}
        </p>
        <div className="flex flex-col items-center space-y-1 mt-0">
          <div className="h-1 w-full max-w-[200px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationTitle;
