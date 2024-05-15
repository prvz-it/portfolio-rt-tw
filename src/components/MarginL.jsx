import React from 'react';

const MarginL = ({children, className}) => {
  return (
    <div className={`lg:ml-[110px] ${className}`}>
        {children}
    </div>
  )
}

export default MarginL