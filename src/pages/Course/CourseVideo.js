import React from 'react'
import './CourseVideo.css'
import Pdf from 'react-to-pdf'

function CourseVideo () {

 console.log(localStorage.getItem("TraineeSubtitleId"));

   const ref = React.createRef()

  return (
    <>
      <div className='mainV'>
        <h1 className='title'>Course Video</h1>

        <div className='include' ref={ref}>
          <h1 className='title2'>Notes:</h1>
          <textarea className='Tarea' placeholder='type your notes here' />
        </div>
        <Pdf targetRef={ref} filename='Notes.pdf'>
          {({ toPdf }) => <button className='dButton' onClick={toPdf}>Download as PDF</button>}

        </Pdf>

      </div>

    </>
  )
}
export default CourseVideo
