export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between border-top mt-auto ">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/AboutMe" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Jiabin (colin) Liu</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary ci ci-github ci-2x" href="https://github.com/mkdkck"></a></li>
                <li className="ms-3"><a className="text-body-secondary ci ci-linkedin ci-2x" href="https://www.linkedin.com/in/jiabin-liu-38559776/"></a></li>
                <li className="ms-3"><a className="text-body-secondary ci ci-facebook ci-2x" href="https://www.facebook.com/jiabin.liu.7/"></a></li>
            </ul>
        </footer>
    );
}