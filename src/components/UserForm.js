import { useState } from 'react'
import axios from 'axios'

const UserForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      userName: username,
      password,
      age
    }

    console.log(admin)

    const api = axios.create({ baseURL: '/' })
    api.post('/createadmin', {
      userName: username,
      password,
      age
    })

    console.log('abc')
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Admin</h3>

      <label>Name:</label>
      <input
        type='text'
        onChange={(e) => setUserName(e.target.value)}
        value={username}
      />

      <label>password:</label>
      <input
        type='text'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <label>age:</label>
      <input
        type='number'
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />

      <button onClick={console.log(age)}>Create User</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default AdminForm
