import React from 'react';
import utkarsh from "../../Images/utkarsh.jpg"
const Utkarsh = () => {
  return (
    <div className='person'>
        <div><img src={utkarsh} alt="" /></div>
        <br />
        <h4>Utkarsh Dombe</h4>
        <h5>Software Developer at NetWins</h5>
        <br />
        <p>He has been very professional and very clear while working on projects this makes him very special. He always split the problems in chunks and solve them in cleaner way.</p>
    </div>
  )
}

export default Utkarsh;