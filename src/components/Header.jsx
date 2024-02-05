export default function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/AboutMe" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Colin Liu</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/AboutMe" className="nav-link active" aria-current="page">AboutMe</a></li>
                    <li className="nav-item"><a href="/Portfolio" className="nav-link">Portfolio</a></li>
                    <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="/Resume" className="nav-link">Resume</a></li>
                </ul>
            </header>
        </div>
    );
}