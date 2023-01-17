import CourseDiv from '../Course/CourseDiv'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import './AllCourses.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function FilterCourses () {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()
  const [value, setValue] = useState([100, 500])
  const [rate, setRate] = useState('')
  const [subject, setSubject] = useState('')

  const [FilterBar, setFilterBar] = useState(false)

  const handleFilterBar = () => setFilterBar(!FilterBar)

  const handleApply = async (event) => {
    event.preventDefault()
    console.log('entered handle price')
    console.log(value[0])
    console.log(value[1])
    await fetchPrice(value[0], value[1])
  }
  const handleApply2 = async (event) => {
    console.log('entered handle apply')
    await fetchSubRate(subject, rate)
  }
  const fetchSubRate = async (a, b) => {
    const response = await fetch('http://localhost:7000/api/filtersubjectrating', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        subject: a,
        rating: b

      })
    })
    const json = await response.json()
    setCourses(json)
  }
  const fetchPrice = async (a, b) => {
    const response = await fetch('http://localhost:7000/api/filterprice', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        min: a,
        max: b
      })
    })
    const json = await response.json()
    setCourses(json)
  }

  const valuetext = (value) => {
    return `${value}°C`
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handlesub = (event) => {
    setSubject(event.target.value)
  }
  const handlerate = (event) => {
    setRate(event.target.value)
  }

  return (
    <div>

      <div className='AllCourses'>
        <h1 className='heading'>Filtered Courses</h1>
        <div>

          <ul>
            {
          courses.map(course => {
            return <CourseDiv course={course} countryNumber={0} inst={false} Details={false}/>
          }
          )
        }
          </ul>

        </div>

      </div>

      <button className='AllCourses-FilterBarButton' onClick={handleFilterBar}>Filter Courses</button>

      <div className={FilterBar ? 'AllCourses-FilterDiv' : 'AllCourses-nonFilterDiv'}>
        <h1 className='AllCourses-Price'>By Price:</h1>
        <div className='AllCourses-Slider'>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Price Range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
              min={0}
              max={1000}
            />

          </Box>
        </div>
        <h1 className='AllCourses-Subject'>By Subject:</h1>
        <input className='AllCourses-TextField' placeholder='Enter Subject' onChange={handlesub} />
        <h1 className='AllCourses-rating'>By rating:</h1>
        <input className='AllCourses-TextField2' placeholder='Enter rating' onChange={handlerate} />
        <button className='AllCourses-Apply2' onClick={handleApply2}>Apply</button>
        <button className='AllCourses-Apply' onClick={handleApply}>Apply Price</button>
      </div>
      <br />
      <br />
      <br />

    </div>
  )
}
export default FilterCourses
