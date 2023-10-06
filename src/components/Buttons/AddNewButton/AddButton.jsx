import { Button } from 'antd'
import React from 'react'
import "./addbutton.css"

function AddButton({label
,onClick}) {
  return (
    <div>
        <Button className='btn'onClick={onClick} style={{ color: 'white'}}>
{label}
        </Button>
    </div>
  )
}

export default AddButton