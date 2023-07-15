import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px', marginBottom:"15px"}} >
{props.alert&& <div className={`alert alert-${props.alert.status==='Rejected'?'danger':'success'} role="alert`}>
 <strong>{props.capitalize(props.alert.status)} </strong>:{props.alert.message}
</div>}
    </div>
  )
}
