import React from 'react'
const from = (props)=>{
   
        return(
            <form onSubmit={props.weather}>
           <input type="text" name="city" placeholder='City...'/>
           <input type="text" name="country" placeholder='Country...'/>
           <button>Get Weather</button>
          </form>
        
        )
          
}
export default from;