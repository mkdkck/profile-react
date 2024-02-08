export default function ProjectCards({ projects: { projectTitle, imageLink, mainTech, github, deployment } }) {
    return (
        <div className="col-lg-5 m-4 p-2 card ">
            <img src={imageLink} className="card-img" alt={projectTitle} style={{
                opacity: 0.2
            }} />
            <div className="card-img-overlay d-flex flex-column justify-content-between p-5 " >
                <div className="m-3 ">
                    <h3 className="card-title fs-3">{projectTitle}</h3>
                    <h5 className="card-title fs-5">--{mainTech}</h5>
                </div>
                <div className="d-flex flex-column align-items-end mb-3">
                    <a className="card-text ci ci-github ci-3x" href={github} />
                    <a className="card-text fs-5" href={deployment} >Deloyment</a>
                </div>
            </div>
        </div >
    );
}