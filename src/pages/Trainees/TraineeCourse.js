import React, { useState, useEffect } from 'react'
import './TraineeCourse.css'
import CourseDetails from '../Course/CourseDetails'
import CourseExercises from '../Course/CourseExercises'
import RateCourse from '../../components/RateCourse'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { Progress } from 'reactstrap'
import CourseSub from '../Course/CourseSub'

export function TraineeCourse () {
  // var location= useLocation();
  // location.state.id
  const [id, setid] = useState(20)
  const [Course, setCourse] = useState()

  const getCourse = async (a) => {
    const response = await fetch('http://localhost:7000/api/filtercoursebyid', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        courseID: a

      })
    })
    const json = await response.json()
    //   console.log(json);
    return json
  }

  useEffect(() => {
    async function getTheCourse () {
      setCourse(await (getCourse(id)))
      // console.log(Course);
    }
    getTheCourse()
  }, [Course])

  return (
    <div>
      <div className='whole'>
        <h1 className='detailsTitle'>Course Details</h1>
        <div className='row'>
          {Course && <CourseDetails course={Course} />}
          <div className='pBar'>
            <ProgressBar value={20} />
          </div>
        </div>
        <h1 className='detailsTitle'>Course Exercises</h1>
        <div className='row'>
          {Course && <CourseExercises course={Course} />}
        </div>
        <h1 className='detailsTitle'>Course Subtitles</h1>
        <div className='row'>
          {Course && <CourseSub course={Course} />}
        </div>
        <h1 className='detailsTitle'>Course Rate</h1>

        <div className='row'>

          {Course && <RateCourse />}
        </div>
        <br />
        <br />

      </div>

    </div>

  )
}

export default TraineeCourse
