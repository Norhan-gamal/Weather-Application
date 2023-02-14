import React from 'react'
const weather=(props)=> {
  
        return(
            <div className='info'>
                {
                    props.temp &&  
                    <p className='infokey'>Tempreture :
                    <span className='infovalue'> {props.temp} </span> </p>
                }

                 {
                   props.city &&  
                   <p className='infokey'>City: 
                    {props.city}</p>
                }

                 {
                   props.country &&  <p className='infokey'>Country: <span className='infovalue'>{props.country}</span></p>
                }

                 {
                    props.hum &&   <p className='infokey'>humidity: <span className='infovalue'>{props.hum}</span> </p>
                }
                
                 {
                    props.description &&   <p className='infokey'> description: <span className='infovalue'>{props.description}</span></p>
                }

                 {
                    props.error &&  <p className='infokey'>error :<span className='infovalue'>{props.error}</span> </p> 
                }
         
          
          
         
         
          </div>
        
        )
          
    
}
export default weather;