import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/Message"
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../project/ProjectCard"

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    },[])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }
        
    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectMessage && <Message type="success" msg={projectMessage}/>}
            <div className={styles.project_layout}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                        />
                ))) : (
                    <p>Não há projetos cadastrados!</p>
                )}
            </div>
        </div>
    )
}

export default Projects