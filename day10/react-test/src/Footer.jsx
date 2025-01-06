import React from 'react'

const Footer = () => {
 
     const today = new Date();
  
     return (
          <div>
               <p>Copyrights {today.getFullYear()}, All Rights Reserved</p>
          </div>
     )
}

export default Footer
