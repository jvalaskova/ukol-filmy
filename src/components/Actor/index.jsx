import React from 'react';

const Actor = ({name, as}) => {
  return (
    <>
      <div className="nameAndAs">
        <p><b>{name}</b></p>
        <p className="castAs">as {as}</p>
        <br/>
      </div>
        
    </>
  )
};
  
export default Actor;
