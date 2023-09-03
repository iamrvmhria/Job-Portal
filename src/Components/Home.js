import React from 'react'
import { Link } from 'react-router-dom'

// import React, { useRef } from 'react'
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <header className='header'>
      <h1>Job Portal</h1>
      <div>
      <button type="button" className="btn btn-primary login">Sign In</button>
      <button type="button" className="btn btn-primary ">Login</button>
      </div>
    </header>

    <section>

      <div className='App'>
        <div className='section'>
          <div>
          <h1 className='jobName'>Senior Developer</h1>
          <p className='para'>is simply dummy test of the printing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut dolores at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo dolore iste?</p>
          </div>
          <Link to="/form" type="button" className="btn btn-primary"  id='applyBtn'>Apply </Link>
        </div>
        <div className='section'>
        <div>
          <h1 className='jobName'>Senior Developer</h1>
          <p className='para'>is simply dummy test of the printing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut dolores at! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nemo dolore iste ?</p>
          </div>
          <Link to="/form" type="button" className="btn btn-primary"  id='applyBtn'>Apply </Link>
        </div>
        <div className='section'>
        <div>
          <h1 className='jobName'>Senior Developer</h1>
          <p className='para'>is simply dummy test of the printing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut dolores at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo dolore iste? </p>
          </div>
          <Link to="/form" type="button" className="btn btn-primary"  id='applyBtn'>Apply </Link>
        </div>
        <div className='section'>
        <div>
          <h1 className='jobName'>Senior Developer</h1>
          <p className='para'>is simply dummy test of the printing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut dolores at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo dolore iste?</p>
          </div>
          <Link to="/form" type="button" className="btn btn-primary"  id='applyBtn'>Apply </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home