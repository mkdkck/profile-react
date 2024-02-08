export default function ProjectCards({ projects: { projectTitle, imageLink, mainTech, github, deployment } }) {
    return (
        <div className="col-md-5 m-4 p-1 card bg-light">
            <img src={imageLink} className="card-img" alt={projectTitle} />
            <div className="card-img-overlay m-4 align-content-between">
                <div className="justify-content-center ">
                    <h3 className="card-title">{projectTitle}</h3>
                    <h5 className="card-title">--{mainTech}</h5>
                </div>

                <div className="d-flex">
                    <a className="card-text ci ci-github ci-3x" href={github} />
                    <a className="card-text" href={deployment} >Deloyment</a></div>
            </div>
        </div>
    );
}