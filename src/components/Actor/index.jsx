import React from 'react';
import './style.css';



const Actor = ({name, as}) => {
  return ( 
    <>
      <p><strong>V hlavních rolích:</strong></p>
      <p className='name'> {name}</p>
      <p className='as'> as {as}</p>
    
    
    </>
  );
}


export default Actor;