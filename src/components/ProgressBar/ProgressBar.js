import React from 'react'
import './ProgressBar.css'




function ProgressBar(props){

  
        return (
         <div className='mainP'>
            <div className='colomnn'>
         <h2 className='headerPbar'>Course Progress</h2>
           <h3 className='headerPbar1'>Percentage Covered :{props.value} %</h3>


           </div>
         </div>
        );
      };
      

export default ProgressBar;




