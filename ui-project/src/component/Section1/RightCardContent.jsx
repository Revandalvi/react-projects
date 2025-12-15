import React from 'react'

function RightCardContent(props) {
  return (
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-13 w-13 flex  justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
        <div>
          <p className=' text-xl leading-relaxed text-white  mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione a accusamus inventore cum in!</p>
        
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
          <button className='bg-blue-600 text-white  px-3 py-2 rounded-full ' ><i className="ri-arrow-right-line"></i></button>
        </div>

      </div>
      </div>        
  )
}

export default RightCardContent