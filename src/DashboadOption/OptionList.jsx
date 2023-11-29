import React, { useState } from 'react'
import List from './List';
import downArrowIcon from '../MenuIcon/downArrow.png'
import windowIcon from '../MenuIcon/window.png'
import zoomIcon from '../MenuIcon/enlarge.png'

function Option() {
  let list = ['All Group',"list1",'list2'];
  const [valueData,setValueData] = useState('All Group');
  const [show,setShow] = useState(false);

  
  return (
    <div className='dashBoadTitle'>
      
      <div className='dashBoadContainer'>
        <div>
        <h1 className=''>My Dashboard</h1>
        </div>

        <div className='d-flex'>
        <div onClick={()=>setShow(!show)} className='dropDown'>
          <p className='placeholdertxt'> {valueData}</p>
          <img style={{marginLeft:"auto",marginRight:"10px"}} height={10} src={downArrowIcon} alt="" />
          </div>

          <div className='box'><img height={20} src={zoomIcon} alt="" /></div>
          <div className='box'><img height={20} src={windowIcon} alt="" /></div>

        </div>


          


      </div>

      <div>
      {
  show &&
        <div className=''>
          <div className='dropBox'>
            <ul className=''>
              {list.map((item,idx)=>(<>
              <li className='listItems'>{item}</li>
              </>))}
            </ul>
          </div>
          
        </div>
}
      </div>

      <List />

        
    </div>
  )
}

export default Option