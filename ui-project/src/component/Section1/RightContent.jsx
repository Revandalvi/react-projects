import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  console.log(props.users);
  
  return (
    <div id='right' className='h-full flex gap-10 flex-nowrap w-2/3 p-6 overflow-x-auto rounded-4xl '>
       {props.users.map(function(elem,idx){


          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
       })}
      

    </div>
  )
}

export default RightContent