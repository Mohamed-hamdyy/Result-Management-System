
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CourseDiv } from '../Course/CourseDiv'
import Avatar from '@mui/material/Avatar'
import EditIcon from '@mui/icons-material/Edit'

import './TraineesHome.css'

export function TraineeHome () {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [details, setDetails] = useState('')

  const [countryNumber, setCountryNumber] = useState()
  const handleCountryNumber = (x) => {
    setCountryNumber(x)
  }

  const getCourses = async (user) => {
    const response = await fetch('http://localhost:7000/api/TraineeMyCourse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: user

      })
    })
    const json = await response.json()
    return json
  }

  const getDetails = async (user) => {
    const response = await fetch('http://localhost:7000/api/getDetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: user

      })
    })
    const json = await response.json()
    return json
  }

  useEffect(() => {
    async function getCoursess () {
      setCourses((await getCourses('ahmedyo2001')))
    }
    getCoursess()
  })

  useEffect(() => {
    async function getDetailss () {
      setDetails(await getDetails('ahmedyo2001'))
    }
    getDetailss()
  })

  return (
    <div className='Whole'>

      <h2 className='headerHome'>My Courses</h2>
      <div className='mainDetailsTrainee'>
        <div className='homeCoursesTrainee'>
          {courses.map((course) => <CourseDiv course={course} country={0} />)}

        </div>

        <div className='traineeDitails'>
          <Avatar
            className='TraineeAvatar'
            sx={{ backgroundColor: '#0277bd', width: 100, height: 100, fontSize: 55 }}
          >

            {/* {instructor && instructor.Name.substring(0,1)+instructor.Name.split(" ")[1].substring(0,1)} */}

          </Avatar>
          <h5 className='traineeName'>{details.userName}</h5>
          <h5 className='traineeEmail'>{details.email}</h5>
          <EditIcon className='T-editIconClick' />

        </div>
      </div>
    </div>
  )
} export default TraineeHome
