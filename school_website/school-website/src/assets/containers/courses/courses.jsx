import React from 'react'
import imgCourse1 from '../../containers/courses/courses-assets/image1.png'
import imgCourse2 from '../../containers/courses/courses-assets/image2.png'
import clock from '../../containers/courses/courses-assets/clock.png'
import Course from '../../components/course/Course'
import './courses.css'

const Courses = () => {

  const courses = {

      course1 : {
        title:'Game Design Essentials',
        hours:8,
        img:imgCourse1,
        timeIcon:clock
      }
      ,
      course2 : {

        title:'Unit Game engine Fundamentals',
        hours:8,
        img:imgCourse2,
        timeIcon:clock
      }

  }

 

  return (

    <div className="courses">

    <div className="ourCourses">Our Courses</div>
    <Course {...courses.course1}/>
    <Course {...courses.course2}/>
    <button className='AllCourses'>All Courses</button>
   
    

    </div>
  )

}

export default Courses