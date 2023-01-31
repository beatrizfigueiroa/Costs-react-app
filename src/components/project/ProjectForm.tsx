import { useState, useEffect } from 'react'
import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export function ProjectForm({ handleSubmit, btnText, projectData }: any) {
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e: any) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e: any) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e: any) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Add project name"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        text="Project Budget"
        name="budget"
        placeholder="Add total budget"
        handleOnChange={handleChange}
        value={project.budget}
      />
      <Select
        name="category_id"
        text="Select a category"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}
