import React, { useState } from 'react'
import './AllCourses.css'
import './TraineeCourse.css'
import { useNavigate } from 'react-router-dom'

import CourseDiv from '../Course/CourseDiv'
import TextField from '@mui/material/TextField'
import { ContentCutOutlined, Subject, Title } from '@mui/icons-material'

export function SearchCourses () {
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState()
  const [subject, setSubject] = useState()
  const [instName, setinstName] = useState()

  const [search, setSearch] = useState('')
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleChecked1 = (event) => {
    if (!checked1) {
      setChecked1(true)
      setChecked2(false)
      setChecked3(false)
    } else { setChecked1(false) }
  }
  const handleChecked2 = (event) => {
    if (!checked2) {
      setChecked1(false)
      setChecked2(true)
      setChecked3(false)
    } else { setChecked2(false) }
  }
  const handleChecked3 = (event) => {
    if (!checked3) {
      setChecked1(false)
      setChecked2(false)
      setChecked3(true)
    } else { setChecked3(false) }
  }

  const handleSearchClick = async (event) => {
    console.log(search)
    console.log(checked1)
    console.log(checked2)
    console.log(checked3)

    if (checked1) { setSubject(search) }
    if (checked2) { setTitle(search) }
    if (checked3) { setinstName(search) }

    console.log('title' + title)
    console.log('subject' + subject)
    console.log('instNmae' + instName)
    console.log('search entered')
    await fetchSerach(instName, title, subject)
  }

  const fetchSerach = async (a, b, c) => {
    const response = await fetch('http://localhost:7000/api/searchCourseBy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        instName: a,
        Title: b,
        Subject: c

      })
    })
    const json = await response.json()
    console.log(json)
    setCourses(json)
    console.log(courses)
  }

  return (
    <div className='searchdiv'>
      <div className='searchTop'>
        <div className='search'>
          <TextField
            id='outlined-basic'
            variant='outlined'
            label='Search'
            onChange={handleSearch}
          />
        </div>

        <button className='SButton' onClick={handleSearchClick}>search</button>
        <div className='SearchBy'>
          <label>
            <input
              type='checkbox'
              checked={checked1}
              onChange={handleChecked1}
            />
            By Subject
          </label>

          <label>
            <input
              type='checkbox'
              checked={checked2}
              onChange={handleChecked2}
            />
            By Title
          </label>
          <label>
            <input
              type='checkbox'
              checked={checked3}
              onChange={handleChecked3}
            />
            By Instructor
          </label>

        </div>
      </div>
      <div>
        <ul>
          {
                  courses.map(course => {
                    return <CourseDiv course={course} countryNumber={0} inst={false} />
                  }
                  )
                }
        </ul>

      </div>

    </div>

  )
}
export default SearchCourses
