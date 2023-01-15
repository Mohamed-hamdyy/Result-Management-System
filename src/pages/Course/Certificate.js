import React from 'react'
import './CourseVideo.css'
import Pdf from 'react-to-pdf'

function Certificate (props) {
  const ref = React.createRef()

  return (
    <>
      <div className='mainV'>
        <h1 className='title'>Congratulations</h1>

        <div className='include' ref={ref}>
          <h1 className='title3'>you have successfully passed the Course </h1>
          <h1 className='title4'> Course: {props.title}</h1>

          <img src='../../images/Certificate3.jpg' alt='no image' height={200} width={200} />

        </div>
        <Pdf targetRef={ref} filename='Certificate.pdf'>
          {({ toPdf }) => <button className='dButton' onClick={toPdf}>Download as PDF</button>}

        </Pdf>

      </div>

    </>
  )
}
export default Certificate
