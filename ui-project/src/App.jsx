
import Section1 from './component/Section1/Section1'

function App() {

  const users=[
    {
      img:'https://images.pexels.com/photos/12903176/pexels-photo-12903176.jpeg',
      intro:'',
      tag:'Satisfied'
    },
     {
      img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderServed'
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderBanked'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App