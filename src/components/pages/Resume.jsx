import ResumePDF from '../../assets/Resume.pdf'

export default function Resume() {
    return (
        <div>
            <h1 className='text-start mt-2'>Resume</h1>
            <a href={ResumePDF} download>Click to download</a>
            <h3 className='mt-4'>Front End</h3>
            <ul className='list-group list-group-flush my-3'>
                <li className='list-group-item'>HTML</li>
                <li className='list-group-item'>CSS</li>
                <li className='list-group-item'>JQuery</li>
                <li className='list-group-item'>Bootstrap</li>
                <li className='list-group-item'>React</li>
            </ul>
            <h3 className='mt-4'>Back End</h3>
            <ul className='list-group list-group-flush my-3'>
                <li className='list-group-item'>APIs</li>
                <li className='list-group-item'>Node</li>
                <li className='list-group-item'>MySQL & Sequelizer</li>
                <li className='list-group-item'>MVC</li>
                <li className='list-group-item'>MongoDB & Mongoose</li>
                <li className='list-group-item'>ORM</li>
                <li className='list-group-item'>MERN Stack</li>
            </ul>
        </div >
    );
}
