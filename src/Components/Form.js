import React from 'react';
import { useNavigate } from "react-router-dom";


function Form() {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/success");
    }
    
    return (
        <>
            <div className="form">
                <form action="" method='post' onSubmit={(e) => handleSubmit(e)}>
                        <p className="formPara" >Fill The Form :-</p>
                        <div className="formitem">
                            <input name="contactName" type="text" id="contactName" placeholder="Your Name *" required={'required'} />
                        </div>
                        <div className="formitem">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email *"  required/>
                        </div>
                        <div className="formitem">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Your Contact Number *" required/>
                        </div>
                        <div className="formitem">
                            <label style={{margin: "1vh 5vw"}} >Upload Resume *</label>
                        </div>
                        <div className="formitem">
                            <input  className='formFile' name="contactSubject" type="file" id="contactSubject" required/>
                        </div>
                        <div className="formitem">
                            <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10"
                                cols="50"></textarea>
                        </div>
                        <input type='submit' className="submitBtn" value={"Submit"} />
                   
                </form>
            </div>
        </>
    )
}

export default Form 