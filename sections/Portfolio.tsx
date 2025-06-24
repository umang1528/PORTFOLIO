import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import Carousel from '../components/Carousel';
import PortfolioCard from '../components/PortfolioCard';
import CloseIcon from '../components/icons/CloseIcon';

const portfolioData: PortfolioItem[] = [
  { 
    id: 'p1', 
    title: 'Modern Loft Conversion', 
    category: 'Interior Design', 
    imageUrl: 'https://picsum.photos/seed/loft/800/600', 
    description: 'Transforming an industrial loft into a chic, contemporary living space.',
    longDescription: 'This project involved a full-scale renovation of a historic loft. Key features include exposed brick, custom steel fabrications, and an open-plan layout maximizing natural light. Smart home technology was integrated throughout.',
    client: 'Private Residence',
    year: 2023
  },
  { 
    id: 'p2', 
    title: 'Eco-Friendly Cafe Branding', 
    category: 'Branding', 
    imageUrl: 'https://picsum.photos/seed/cafebrand/800/600', 
    description: 'Complete brand identity for a new sustainable coffee shop.',
    longDescription: 'Developed a comprehensive brand strategy, including logo design, packaging, menu layouts, and digital assets. The design emphasized natural textures and earthy tones to reflect the cafe\'s commitment to sustainability.',
    client: 'GreenBean Cafe',
    year: 2022
  },
  { 
    id: 'p3', 
    title: 'Minimalist Apartment Design', 
    category: 'Interior Design', 
    imageUrl: 'https://picsum.photos/seed/minapt/800/600', 
    description: 'Creating a serene and functional minimalist apartment interior.',
    longDescription: 'Focused on clean lines, a neutral color palette, and multi-functional furniture to optimize a compact urban apartment. Custom storage solutions were key to maintaining the minimalist aesthetic.',
    client: 'Urban Dweller',
    year: 2023
  },
  { 
    id: 'p4', 
    title: 'Art Gallery Exhibit Graphics', 
    category: 'Graphic Design', 
    imageUrl: 'https://picsum.photos/seed/gallerygfx/800/600', 
    description: 'Designing promotional materials and wayfinding for a contemporary art exhibition.',
    longDescription: 'Created a cohesive visual system for all exhibit-related graphics, including posters, brochures, digital banners, and on-site signage. The design aimed to be modern and engaging, complementing the artworks on display.',
    client: 'City Art Gallery',
    year: 2022
  },
   { 
    id: 'p5', 
    title: 'Luxury Hotel Lobby', 
    category: 'Interior Design', 
    imageUrl: 'https://picsum.photos/seed/hotellobby/800/600', 
    description: 'Designing an opulent and welcoming lobby for a boutique hotel.',
    longDescription: 'The design features custom marble flooring, bespoke lighting fixtures, and plush velvet seating, creating an atmosphere of sophisticated elegance. A statement art piece serves as the focal point.',
    client: 'The Grand Hotel',
    year: 2024
  },
  { 
    id: 'p6', 
    title: 'Tech Startup Rebrand', 
    category: 'Branding', 
    imageUrl: 'https://picsum.photos/seed/techbrand/800/600', 
    description: 'Refreshing the brand identity for a growing technology startup.',
    longDescription: 'This rebrand included a new logo, color palette, typography system, and comprehensive brand guidelines. The aim was to project innovation, reliability, and a forward-thinking approach.',
    client: 'Innovate Solutions Inc.',
    year: 2023
  },
];

const PortfolioModal: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in-up duration-300" onClick={onClose}>
      <div 
        className="bg-brand-card rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border border-brand-primary/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-foreground-muted hover:text-brand-accent transition-colors z-10"
          aria-label="Close modal"
          data-cursor-interactive="true"
        >
          <CloseIcon className="w-8 h-8"/>
        </button>
        <img src={item.imageUrl} alt={item.title} className="w-full h-auto max-h-[50vh] object-contain rounded-md mb-6 shadow-lg" />
        <h2 className="text-3xl font-bold text-brand-accent mb-3">{item.title}</h2>
        <span className="inline-block bg-brand-primary/20 text-brand-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
          {item.category}
        </span>
        {item.client && <p className="text-brand-foreground-muted mb-1"><span className="font-semibold text-brand-foreground">Client:</span> {item.client}</p>}
        {item.year && <p className="text-brand-foreground-muted mb-4"><span className="font-semibold text-brand-foreground">Year:</span> {item.year}</p>}
        <p className="text-brand-foreground-muted leading-relaxed whitespace-pre-line">{item.longDescription || item.description}</p>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleCardClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  
  const featuredItems = portfolioData.slice(0, 3);

  return (
    <AnimatedSection className="py-20 lg:py-32 bg-brand-dark" id="portfolio"> {/* Use brand-dark */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-accent mb-4">My Work</h2>
          <p className="text-lg text-brand-foreground-muted max-w-2xl mx-auto">
            A selection of projects that showcase my passion for design and attention to detail.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
        </div>

        <AnimatedSection animationType="fade-in-up" className="mb-16 md:mb-24 h-[60vh] md:h-[70vh]">
          <Carousel<PortfolioItem>
            items={featuredItems}
            renderItem={(item) => <PortfolioCard item={item} onClick={handleCardClick} isFeatured={true} />}
            autoplay={true}
            autoplayInterval={6000}
          />
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioData.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              animationType="fade-in-up" 
              delay={`delay-${(index % 3) * 150}`}
            >
              <PortfolioCard item={item} onClick={handleCardClick} />
            </AnimatedSection>
          ))}
        </div>
      </div>
      <PortfolioModal item={selectedItem} onClose={closeModal} />
    </AnimatedSection>
  );
};

export default Portfolio;