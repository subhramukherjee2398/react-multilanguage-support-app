import React from 'react'
import { useTranslation } from 'react-i18next'
function Profile() {
  const {t} = useTranslation("common","profile")
  return (
    <div className="container mt-4">
  <h1 className='text-center'>{t("common:profile")}</h1>
  <div className="form-group">
      <label className="inputsm">{t("profile:name")}</label>
      <input type="name" className="form-control p4" id="name" value="Subhra Mukherjee" name="email"/>
    </div>
    <div className="form-group">
      <label className="inputsm">{t("profile:age")}:</label>
      <input type="age" className="form-control p4" id="age" value="23" name="email"/>
    </div>
  <div className="form-group">
      <label className="inputsm">{t("profile:email")}:</label>
      <input type="email" className="form-control p4" id="email"  value="subhramukherjee560@gmail.com" name="email"/>
    </div>
    <br/>
    <div className='text-left'>
       <button className='btn btn-outline-success'>{t("common:submit")}</button>
    </div>
    </div>
  )
}

export default Profile