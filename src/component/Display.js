import React from 'react'


export const Display = () => {

  return (
    <>
    <h3>{sessionStorage.getItem("firstname")}</h3>
    <h3>{sessionStorage.getItem("lastname")}</h3>
    <h3>{sessionStorage.getItem("DOB")}</h3>
    {/* <h3>{sessionStorage.getItem("ProfilePhoto")}</h3> */}
    <h3>{sessionStorage.getItem("Experience")}</h3>
    </>
  )
}
