import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import AddButton from '../../components/Buttons/AddNewButton/AddButton'
// import DashBoard from '../../Dashboard/DashBoard'

function AddPlans() {
  return (

    <div>

      {/* <DashBoard>      */}
<SubHeading heading={"Plans"}/>     
<div className="col-12 d-flex justify-content-end"> <AddButton label={"ADD PLAN"}/></div> 
      {/* </DashBoard> */}
 
      </div>
  )
}

export default AddPlans