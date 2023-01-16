import React, { Component } from 'react'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'React'
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange (event) {
    this.setState({
      selectedOption: event.target.value
    })
  }

  formSubmit (event) {
    event.preventDefault()
    console.log(this.state.selectedOption)
    return this.selectedOption
  }

  getselected = () => {
    return this.selectedOption
  }

  render () {
    return (
      <form onSubmit={this.formSubmit}>
        <div className='radio'>
          <label>
            <input
              type='radio'
              value={this.props.choice1}
              checked={this.state.selectedOption === this.props.choice1}
              onChange={this.onValueChange}
            />
            {this.props.choice1}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              value={this.props.choice2}
              checked={this.state.selectedOption === this.props.choice2}
              onChange={this.onValueChange}
            />
            {this.props.choice2}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              value={this.props.choice3}
              checked={this.state.selectedOption === this.props.choice3}
              onChange={this.onValueChange}
            />
            {this.props.choice3}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              value={this.props.choice4}
              checked={this.state.selectedOption === this.props.choice4}
              onChange={this.onValueChange}
            />
            {this.props.choice4}
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className='btn btn-default' type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

export default Question
