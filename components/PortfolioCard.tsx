import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: (item: PortfolioItem) => void;
  isFeatured?: boolean;
}

const CategoryBadge: React.FC<{ category: PortfolioItem['category'] }> = ({ category }) => {
  let bgColor = 'bg-brand-secondary'; // Default to secondary
  if (category === 'Interior Design') bgColor = 'bg-brand-primary';
  else if (category === 'Graphic Design') bgColor = 'bg-brand-secondary'; // Can be more specific if themes vary widely
  else if (category === 'Branding') bgColor = 'bg-purple-500'; // Or another theme color, e.g. text-brand-accent with a bg-brand-light

  return (
    <span className={`absolute top-3 right-3 text-xs font-semibold text-brand-button-text px-2 py-1 rounded ${bgColor} shadow-md`}>
      {category}
    </span>
  );
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick, isFeatured = false }) => {
  const cardContent = (
    <>
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
        <CategoryBadge category={item.category} />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-brand-foreground mb-2 truncate group-hover:text-brand-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-brand-foreground-muted mb-3 h-10 overflow-hidden text-ellipsis">
          {item.description}
        </p>
        {isFeatured && (
          <p className="text-xs text-brand-foreground-muted/70">
            {item.client && `Client: ${item.client} `} {item.year && `(${item.year})`}
          </p>
        )}
      </div>
       {!isFeatured && <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-brand-accent font-medium text-sm">View Details &rarr;</span>
      </div>}
    </>
  );

  if (isFeatured) { // Used in Carousel
    return (
      <div 
        className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 bg-brand-card"
        onClick={() => onClick && onClick(item)}
        data-cursor-interactive="true"
      >
        <div className="md:w-3/4 lg:w-2/3 aspect-video relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer">
           <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 flex flex-col justify-end p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{item.title}</h3> {/* Keeping white for direct overlay on image */}
              <p className="text-sm md:text-md text-brand-accent">{item.category}</p>
          </div>
        </div>
        <div className="md:w-3/4 lg:w-2/3 mt-4 text-center">
            <p className="text-brand-foreground-muted text-sm md:text-base leading-relaxed">{item.longDescription || item.description}</p>
        </div>
      </div>
    );
  }

  // Used in Grid
  return (
    <div 
      className="bg-brand-card rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
      onClick={() => onClick && onClick(item)}
      data-cursor-interactive="true"
    >
      {cardContent}
    </div>
  );
};

export default PortfolioCard;