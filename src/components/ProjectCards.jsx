export default function ProjectCards({ projects: { projectTitle, imageLink, mainTech, github, deployment } }) {
    return (
        <div className="col-md-5 m-4 p-2 card bg-light">
            <img src={imageLink} className="card-img" alt={projectTitle} />
            <div className="card-img-overlay d-flex flex-column justify-content-between p-5">
                <div className="">
                    <h3 className="card-title">{projectTitle}</h3>
                    <h5 className="card-title">--{mainTech}</h5>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <a className="card-text ci ci-github ci-3x" href={github} />
                    <a className="card-text" href={deployment} >Deloyment</a>
                </div>
            </div>
        </div>
    );
}