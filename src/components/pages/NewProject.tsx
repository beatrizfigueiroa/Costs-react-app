import { useNavigate } from 'react-router-dom'

import { ProjectForm } from '../project/ProjectForm'

import styles from './NewProject.module.css'

export function NewProject() {
  const navigate = useNavigate()

  function createPost(project: any) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('projects')
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project and then add the services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project" />
    </div>
  )
}