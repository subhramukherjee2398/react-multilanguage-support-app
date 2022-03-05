import React from 'react'
import { useTranslation } from 'react-i18next'
function Home() {
  const {t} = useTranslation(["home"])
  return (
      <div className='container mt-5'>
        <h2 className=''>{t("home")}</h2>
         <h6 className='text-left mt-4 '><i className='introtext'>{t("Communication is a core component of any society, and language is an important aspect of that.  As language began to develop, different cultural communities put together collective understandings through sounds.  Over time, these sounds and their implied meanings became commonplace and language was formed.  Intercultural communication is a symbolic process whereby social reality is constructed, maintained, repaired and transformed.  As people with different cultural backgrounds interact, one of the most difficult barriers they face is that of language.  Check out the graphic below that shows how language has evolved over time!")}</i></h6>
      </div>
  )
}

export default Home