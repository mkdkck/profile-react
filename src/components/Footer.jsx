export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center mt-auto py-3 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/AboutMe" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Jiabin (colin) Liu</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li> */}
            </ul>
        </footer>
    );
}