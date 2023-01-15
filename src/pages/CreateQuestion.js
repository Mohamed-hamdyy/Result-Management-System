import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import RadioList from './RadioList'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginLeft: 'auto',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    backgroundColor: theme.palette.background.paper
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignIn () {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component='h1' variant='h4' alignItems='left'>
          Question-
          <TextField
            margin='normal'
            required
            fullWidth
            id='Question'
            label='Question'
            name='Question'
            autoComplete='Question'
            autoFocus
          />
        </Typography>
        <form className={classes.form} noValidate>
          <RadioList />
        </form>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Add Question
        </Button>
      </div>
    </Container>
  )
}
