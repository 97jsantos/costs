import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch(`https://jsantos97-costs.herokuapp.com/projects`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                navigate(`/projects`, {state: {message: 'Projeto criado com sucesso!' }})
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.new_project_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btntext="Criar Projeto"/>
        </div>
    )
}

export default NewProject