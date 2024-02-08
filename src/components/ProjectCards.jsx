export default function ProjectCards({ projects: { projectTitle, imageLink, mainTech, github, deployment } }) {
    return (
        <div className="col-5 m-4 p-1 card bg-dark text-white">
            <img src={imageLink} className="card-img" alt={projectTitle} />
            <div className="card-img-overlay">
                <h3 className="card-title">{projectTitle}</h3>
                <h5 className="card-title">{mainTech}</h5>
                <div>
                    <a className="card-text ci ci-github ci-3x" href={github} />
                    <a className="card-text" href={deployment} >Deloyment</a></div>
            </div>
        </div>
    );
}