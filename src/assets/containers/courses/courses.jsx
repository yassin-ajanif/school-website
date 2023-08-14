import React from 'react'
import imgCourse1 from '../../containers/courses/courses-assets/image1.png'
import imgCourse2 from '../../containers/courses/courses-assets/image2.png'
import clock from '../../containers/courses/courses-assets/clock.png'
import Course from '../../components/course/Course'
import './courses.css'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

  const navigate = useNavigate()

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

  function navigateToAllCoursesPage(){

    navigate('/allCourses')
  }

 

  return (

    <div className="courses">

    <div className="ourCourses">Our Courses</div>

    <div className="courses-bundle">
    <Course {...courses.course1}/>
    <Course {...courses.course2}/>
    </div>
    
    <button className='AllCourses' onClick={navigateToAllCoursesPage}>All Courses</button>
   
    

    </div>
  )

}

export default Courses