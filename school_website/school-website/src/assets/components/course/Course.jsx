import React from 'react'
import './course.css'

const Course = ({title,img,hours,timeIcon}) => {


    return (


   <div className="course">

    <div className="course-image">
        <img src={img}  />
    </div>

    <div className="course-title_time">
      <div className="course-title">{title}</div>

    <div className="course-hours">

      <div className="course-time-icon">
        <img src={timeIcon} alt="" />
        </div>
      <div className="course-time">{hours} HRS</div>

      </div>
    </div>


    <div className="course-bar"></div>
   </div>


  )
}

export default Course