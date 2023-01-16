import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <button>

          <Link to='/Home'>
            <h1>
              View Admin
            </h1>
          </Link>
        </button>

        <button>

          <Link to='/AdminForm'>
            <h1>
              Add Admin
            </h1>
          </Link>
        </button>

      </div>
    </header>
  )
}

export default Navbar
