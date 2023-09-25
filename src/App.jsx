import Card from './Card.jsx'
import { useState } from 'react'
function App() {
  let[count,setCount] = useState(0)//Hooks - it's a function
  const data =[
    {
    plan:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    support:"Dedicated Phone Support",
    supportEnabler:false,
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
   },
    {
      plan:"PLUS",
      price:"9",
      user:<b>"5 User"</b>,
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      support:"Dedicated Phone Support",
      supportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
      },
      {
        plan:"PRO",
        price:"49",
        user:<b>"Unlimited User"</b>,
        userEnabler:true,
        storage:"5GB Storage",
        storageEnabler:true,
        publicProjects:"Unlimited Public Projects",
        publicProjectsEnabler:true,
        communityAccess:"Community Access",
        communityAccessEnabler:true,
        privateProjects:"Unlimited Private Projects",
        privateProjectsEnabler:true,
        support:"Dedicated Phone Support",
        supportEnabler:true,
        subDomain:<b>"Unlimited Free Subdomain"</b>,
        subDomainEnabler:true,
        reports:"Monthly Status Reports",
        reportsEnabler:true
        }
]
return (
 <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{ 
          return <Card data={e} key={i}/>
          {/* sending data to card component */}
          
         })
      }
      <div>
        <button className='btn btn-danger' onClick={()=>{
          setCount(++count)
          console.log(count)
          }}
          >Click Me, I was already Clicked {count} times</button>
      </div>
      </div>
    </div>
</section>
 </> 
 )
}


export default App
