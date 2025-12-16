import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  number, 
  title, 
  description, 
  image, 
  link 
}) => {
  return (
    <div className="group relative">
      <Link to={link} className="block">
        {/* Image */}
        <div className="relative h-[427px] rounded-[30px] overflow-hidden mb-6">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-[390px] right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center rotate-[232deg] transform group-hover:rotate-[270deg] transition-transform duration-300">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 0L14.5 29M14.5 29L0 14.5M14.5 29L29 14.5" stroke="#000" strokeWidth="3"/>
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <p className="font-radhiumz text-6xl md:text-7xl uppercase text-black">
            {number}
          </p>
          <h3 className="font-radhiumz text-xl md:text-2xl uppercase text-black leading-tight">
            {title}
          </h3>
          <p className="font-poppins text-sm text-black leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;

