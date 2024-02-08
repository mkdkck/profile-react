import PortfolioCard from '../ProjectCards'
import Projects from '../utils/data.json'
export default function Portfolio() {
    return (
        <>
            <h1 className='justify-content-start'>Portfolio</h1>
            <div className='row'>
                < PortfolioCard projects={Projects[0]} />
                < PortfolioCard projects={Projects[1]} />
                < PortfolioCard projects={Projects[2]} />
                < PortfolioCard projects={Projects[3]} />
                < PortfolioCard projects={Projects[4]} />
                < PortfolioCard projects={Projects[5]} />
            </div>
        </>
    );
}