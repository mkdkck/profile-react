import ResumePDF from '../../assets/Resume.pdf'
export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <a href={ResumePDF} download>Click to download</a>
            <p>After completing my graduation from Melbourne Uni in 2013, I have been employed as a Company Assistant and later assumed the role of Operations Director at a boutique winery, where I currently work. Despite being self-taught in basic hardware and software knowledge, my passion for exploring computer-related topics grew, especially since I used to be a gaming enthusiast.
                During my tenure at the winery, I got involved in the development of the company's website. This was my first experience with coding on the frontend. Inspired by friends in the industry, I have decided to enroll in a coding bootcamp to further explore my potential in this field.
            </p>
        </div>
    );
}