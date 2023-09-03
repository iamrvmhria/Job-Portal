import React from 'react'
import { Link } from 'react-router-dom'


function SuccessPopUp() {
    return (
        <>
            <div className='success'>

                <span className="material-symbols-outlined" style={{fontSize:"300px",textAlign:'center'}}>
                    done
                </span>

                <h1>Your Application Successfully Submited !</h1> <br />
              <Link to={"/"}>Go Back To Home Page </Link>
            </div>
        </>
    )
}

export default SuccessPopUp