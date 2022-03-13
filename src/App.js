import React from 'react'
import Profile from './profile/Profile'




function App() {
  const FullName="Amdouni Rayen"
  const Bio="Some Bio ..."
  const Profession="Web Dev"

 function handleName() {
  alert(`Hello from ${FullName}`);
 }

  
  
  return ( 
 <> 
   
<div style={{
      display : "flex" , 
      flexWrap : "wrap" ,
       justifyContent : "space-evenly" ,
        width:"80%" ,
         margin:"auto" }} >
   
    <Profile FullName={FullName} Bio={Bio} Profession={Profession} handleName={handleName}/>
 
  
     
    
   </div> 
   </>
  )
  
}


export default App;
