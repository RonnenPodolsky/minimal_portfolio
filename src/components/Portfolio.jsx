import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='w-1/2 md:w-7/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            imageUrl={project.imgUrl}
            title={project.title}
            link={project.link}
            stack={project.stack}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
