const StatsCard = ({ number, label, suffix = '' }) => {
  return (
    <div className="bg-[rgba(227,199,168,0.24)] rounded-[30px] px-8 py-12 text-center">
      <div className="font-radhiumz text-primary">
        <p className="text-7xl md:text-8xl lg:text-[128px] uppercase leading-none mb-2">
          {number}{suffix}
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.29em]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;

