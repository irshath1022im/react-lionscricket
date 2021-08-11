
import React from 'react'

export default function RequestError({request_error}) {
    return (
        <div>
        {
            request_error.length > 0 &&
                request_error.map( (error,key) =>{
                    return(
                        <div className="alert alert-warning" role="alert" key={key}>
                              <span>{error}</span>       
                        </div>
                    )
                })
          
        
        }
        </div>
    )
}
