import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState, useEffect } from 'react'

function Row (props) {
  const { row } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.title}
        </TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Course ID</TableCell>
                    <TableCell>{row.courseID}</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rating</TableCell>
                    <TableCell>{row.rating}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>No. of Ratings</TableCell>
                    <TableCell>{row.numOfRatings}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>{row.subject}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>{row.title}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Hours</TableCell>
                    <TableCell>{row.totalHours}</TableCell>
                  </TableRow>
                  {row.discounts && row.discounts.map((discount) => (
                    <TableRow>
                      <TableCell>Discount</TableCell>
                      <TableCell>{discount}</TableCell>
                    </TableRow>
                  ))}
                  {row.examExercises && row.examExercises.map((examExercise) => (
                    <TableRow>
                      <TableCell>Exam Exercises</TableCell>
                      <TableCell>{examExercise}</TableCell>
                    </TableRow>
                  ))}
                  {row.exams && row.exams.map((exam) => (
                    <TableRow>
                      <TableCell>Exam</TableCell>
                      <TableCell>{exam}</TableCell>
                    </TableRow>
                  ))}
                  {row.exercises && row.exercises.map((exercise) => (
                    <TableRow>
                      <TableCell>Exercises</TableCell>
                      <TableCell>{exercise}</TableCell>
                    </TableRow>
                  ))}
                  {row.review && row.review.map((review) => (
                    <TableRow>
                      <TableCell>review</TableCell>
                      <TableCell>{review}</TableCell>
                    </TableRow>
                  ))}
                  {row.subtitles && row.subtitles.map((subtitle) => (
                    <TableRow>
                      <TableCell>Subtitle</TableCell>
                      <TableCell>{subtitle}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function LandingPage () {
  const [courses, setcourses] = useState('')

  useEffect(() => {
    fetch('http://localhost:7000/api/instructorCourses',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          userName: 'inst1'
        })

      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setcourses(data)
        console.log(data)
      })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {courses && courses.map((course) => (
            <Row key={course.courseID} row={course} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
