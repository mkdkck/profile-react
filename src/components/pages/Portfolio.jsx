import PortfolioCard from '../ProjectCards'
import Projects from '../utils/data.json'
import img0 from '../../assets/img/TextEditor.png'
import img1 from '../../assets/img/SocialBE.png'
import img2 from '../../assets/img/TechBlog.png'
import img3 from '../../assets/img/Ecommerce.png'
import img4 from '../../assets/img/EmployeeTracker.png'
import img5 from '../../assets/img/NoteTaker.png'

export default function Portfolio() {
    return (
        <>
            <h1 className='justify-content-start text-start'>Portfolio</h1>
            <div className='row'>
                < PortfolioCard projects={Projects[0]} imageLink={img0} />
                < PortfolioCard projects={Projects[1]} imageLink={img1} />
                < PortfolioCard projects={Projects[2]} imageLink={img2} />
                < PortfolioCard projects={Projects[3]} imageLink={img3} />
                < PortfolioCard projects={Projects[4]} imageLink={img4} />
                < PortfolioCard projects={Projects[5]} imageLink={img5} />
            </div>
        </>
    );
}