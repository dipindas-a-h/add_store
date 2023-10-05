import { Button } from 'antd'
import React from 'react'
import "./addbutton.css"

function AddButton({label}) {
  return (
    <div>
        <Button className='btn' style={{ color: 'white'}}>
{label}
        </Button>
    </div>
  )
}

export default AddButton