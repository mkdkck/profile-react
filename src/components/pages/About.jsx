import Avatar from '@mui/material/Avatar';

import img from '../../../src/assets/img/Colin-photo.jpg'
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        if (window.location.pathname !== '/AboutMe') {
            window.location.href = '/AboutMe'
        }
    }, []);

    return (
        <div>
            <h1>About Me</h1>
            <div>
                <Avatar className="cphoto" src={img} alt="Colin`s photo" sx={{ width: 200, height: 200 }} />
                <p>After completing my graduation from Melbourne Uni in 2013, I have been employed as a Company Assistant and later assumed the role of Operations Director at a boutique winery, where I currently work. Despite being self-taught in basic hardware and software knowledge, my passion for exploring computer-related topics grew, especially since I used to be a gaming enthusiast.
                    During my tenure at the winery, I got involved in the development of the company's website. This was my first experience with coding on the frontend. Inspired by friends in the industry, I have decided to enroll in a coding bootcamp to further explore my potential in this field.
                </p>
            </div>

        </div>
    );
}