import React from 'react'

function Count(props) {
    const {Count} = props
  return (
    <div>
      <h2 className="count bg-white h-[100px] w-[100px] rounded-[50%] text-[3rem] flex items-center justify-center">
        {Count}
      </h2>
    </div>
  );
}

export default Count
