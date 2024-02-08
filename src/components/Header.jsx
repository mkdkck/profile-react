import { Link } from 'react-router-dom';

import Nav from './Navigation'
export default function Header() {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link
                to="/AboutMe"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                <span className="fs-4">Jiabin (Colin) Liu
                </span>
            </Link>

            <Nav />
        </header>
    );
}