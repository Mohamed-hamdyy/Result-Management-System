import React, { useState, useEffect } from 'react'
import './CourseSub.css'
import { useNavigate } from 'react-router-dom'

export function CourseSub (props) {
  const array = props.course.subtitles
  const [sub, setSub] = useState()

  const getsubtitles = async (a) => {
    const response = await fetch('http://localhost:7000/api/getSubtitles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        subtitles: a

      })
    })
    console.log(a)
    const json = await response.json()
    console.log(json)
    return json
  }

  useEffect(() => {
    async function getThesub () {
      setSub(await (getsubtitles(array)))
      // console.log(Course);
    }
    getThesub()
  }, [])

  const navigate = useNavigate()

  return (
    <div className='mainS'>

      <ul>
        {sub &&
      sub.map(subt => {
        return (
          <div className='rowS'>
            <h2 className='subText'>{subt.title} </h2>
            <button className='subButton'>watch</button>
          </div>
        )
      }
      )}
      </ul>

    </div>
  )
}
export default CourseSub
