import React, { useState } from 'react'
// import { useNavigate} from "react-router-dom"

const Home = () => {

//    let history = useNavigate();
   const[person,setPerson] = useState({
       firstname : "",
       lastname : "",
       DOB:"",
       Degisnation:"",
       ProfilePhoto:"",
       Experience:0
   })

   const handleClick = (e) => 
   {
        e.preventDefault()
        console.log(person)
        sessionStorage.setItem("firstname",person.firstname)
        sessionStorage.setItem("lastname",person.lastname)
        sessionStorage.setItem("DOB",person.DOB)
        sessionStorage.setItem("Degisnation",person.Degisnation)
        sessionStorage.setItem("Experience",person.Experience)
        // history.push("")
   }

   const handleChange = (e,number) => {

    switch(number)
    {
        case "firstname" : {
            setPerson( {...person,
                firstname : e.target.value,
                // lastname : "",
                // DOB:"",
                // Degisnation:"",
                // ProfilePhoto:"",
                // Experience:0
            }
               
            )
            break;
        }
        
        case "lastname" : {
            setPerson(
                {...person,
                    // firstname : "",
                    lastname : e.target.value,
                //     DOB:"",
                //     Degisnation:"",
                //     ProfilePhoto:"",
                //     Experience:0
                }
            )
            break;
        }
        
        case "DOB" : {
            setPerson(
                {...person,
                    // firstname : "",
                    // lastname : "",
                    DOB:e.target.value,
                    // Degisnation:"",
                    // ProfilePhoto:"",
                    // Experience:0
                }
            )
            break;
        }
        
        case "Degisnation" : {
            setPerson(
                {...person,
                    // firstname : "",
                    // lastname : "",
                    // DOB:"",
                    Degisnation:e.target.value,
                    // ProfilePhoto:"",
                    // Experience:0
                }
            )
            break;
        }
        
        case "ProfilePhoto" : {
            setPerson(
                {...person,
                    // firstname : "",
                    // lastname : "",
                    // DOB:"",
                    // Degisnation:"",
                    ProfilePhoto:e.target.value,
                    // Experience:0
                }
            )
            break;
        }
        
        case "Experience" : {
            setPerson(
                {...person,
                    // firstname :"",
                    // lastname : "",
                    // DOB:"",
                    // Degisnation:"",
                    // ProfilePhoto:"",
                    Experience: e.target.value
                }
            )
            break;
        }
        
        default: setPerson({
            firstname : "",
            lastname : "",
            DOB:"",
            Degisnation:"",
            ProfilePhoto:"",
            Experience:0
        })
    }
   }

  return (
     <>
     <h2 className="text-center">Home</h2>
     <form onSubmit={handleClick}>
        <h3>First name </h3>
        <span> <p>{person.firstname}</p> <input type='text' onChange={(e,param="firstname")=>{handleChange(e,param)}}/> </span>
        <h3>Last name </h3>
        <span> <p>{person.lastname}</p> <input type='text' onChange={(e,param="lastname")=>{handleChange(e,param)}}/> </span>
        <h3>Date of Birth </h3>
        <span> <p>{person.DOB}</p> <input type='datetime-local' onChange={(e,param="DOB")=>{handleChange(e,param)}}/> </span>
        <h3>Designation</h3>
        <span> <p>{person.Degisnation}</p> <input type='text' onChange={(e,param="Degisnation")=>{handleChange(e,param)}}/> </span>
        <h3>Profile Photo Link - any image link </h3>
        <span> <p>{person.ProfilePhoto}</p> <input type='text' onChange={(e,param="ProfilePhoto")=>{handleChange(e,param)}}/> </span>
        <h3>Experience </h3>
        <span> <p>{person.Experience}</p> <input type='number' onChange={(e,param="Experience")=>{handleChange(e,param)}}/> </span>
        <br/>
        <br/>
        <input type="submit" />
     </form>
     
     </>
  )
}

export default Home