import React from 'react'
import style from './email.module.css'

export default function form() {

    return (
        <div>
            <form className={style.form_all}>
                <h3 className={style.heading3}>Be one of the first ones to know about our latest news.</h3>
                <div>
                    <label>
                        <p>First Name:</p>    
                        <input type="text" name="name" placeholder="First Name"/>
                    </label>
                </div>
                <br></br>
                <div>
                    <label>
                        <p>Last Name:</p>    
                        <input type="text" name="name" placeholder="Last Name"/>
                    </label>
                </div>
                <br></br>
                <div>
                    <label>
                        <p>Email:</p>   
                        <input type="text" name="email" placeholder="Email"/>
                    </label>
                </div>
                <br></br>
                <div>
                    <label>
                        <p>Message Box:</p> 
                        <textarea rows='6' placeholder='Message '/>
                    </label>
                </div>
                <br></br>
                <div>
                    <button onClick={()=> alert("Message Received!")}className={style.button}>Submit</button>
                </div>
                <br></br>
            </form>
        </div>
    )
}