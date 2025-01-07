import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export default function Book({ data }) {
   const [optionshown, setOptionshown] = useState(false)

  return (
   <div className="book">
      <img src={data?.cover} alt="cover" style={{filter: optionshown ? 'blur(2px)' : 'none'}} />
      <div className="about-and-option-items">
         <div className={`option-items ${optionshown ? 'option-items-show' : 'option-items-hide'}`}>
            <p>Download</p>
            <p>Copy Link</p>
            <p>Report</p>
         </div>
         <div className="about-and-options">
            <div className="about">
               <h5>{data?.title}</h5>
               <p>{data?.author}</p>
            </div>
            <div className="options" onClick={() => setOptionshown(true)}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
   </div>
  )
}
