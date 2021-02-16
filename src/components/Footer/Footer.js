import React from 'react'

export default function Footer() {
    return (
<footer className="bg-light text-center text-lg-start " style={{marginTop:"10%"}}>
 
  <div className="container p-4">
   
    <div className="row">
     
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <p>
        © 2021 HMD Global. All rights reserved.
         Nokia is a registered trademark of Nokia Corporation. 
         HMD Global Oy is the exclusive licensee of the Nokia brand for phones & tablets.
        </p>
      </div>
       <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
        <li>
            <a href="#!" class="text-dark">Home</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Achievements</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Specifications</a>
          </li>
        </ul>
      </div>
     </div>
   </div>
 <div className="text-center p-3" style={{background: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-dark" href="https://www.nokia.com/">Visit Nokia.com</a>
  </div>
  
</footer>

    )
}
