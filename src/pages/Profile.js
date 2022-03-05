import React from 'react'

function Profile() {
  return (
    <div className="container mt-4">
  <h1 className='text-center'>Profile</h1>
  <div className="form-group">
      <label className="inputsm">Name:</label>
      <input type="name" className="form-control p4" id="name" value="Subhra Mukherjee" name="email"/>
    </div>
    <div className="form-group">
      <label className="inputsm">Age:</label>
      <input type="age" className="form-control p4" id="age" value="23" name="email"/>
    </div>
  <div className="form-group">
      <label className="inputsm">Email:</label>
      <input type="email" className="form-control p4" id="email"  value="subhramukherjee560@gmail.com" name="email"/>
    </div>
    <br/>
    <div className='text-center'>
       <button className='btn btn-outline-success'>Submit</button>
    </div>
    </div>
  )
}

export default Profile