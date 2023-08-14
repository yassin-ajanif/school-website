import React from 'react'
import imgCourse1 from '../../containers/courses/courses-assets/image1.png'
import imgCourse2 from '../../containers/courses/courses-assets/image2.png'
import clock from '../../containers/courses/courses-assets/clock.png'
import Course from '../../components/course/Course'


const AllCourses = () => {

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
      },

      course3 : {

        title:'Dynamic Game engine Fundamentals',
        hours:10,
        img:imgCourse2,
        timeIcon:clock
      },

      course4 : {

        title:'Dynamic Game engine Fundamentals',
        hours:10,
        img:imgCourse2,
        timeIcon:clock
      },

      course5 : {

        title:'Dynamic Game engine Fundamentals',
        hours:10,
        img:imgCourse2,
        timeIcon:clock
      },

      course6 : {

        title:'Dynamic Game engine Fundamentals',
        hours:10,
        img:imgCourse2,
        timeIcon:clock
      },



      



  }

 

  return (

    <div className="courses">

    <div className="ourCourses">Our Courses</div>

    <div className="courses-bundle">
    <Course {...courses.course1}/>
    <Course {...courses.course2}/>
    <Course {...courses.course3}/>
    <Course {...courses.course4}/>
    <Course {...courses.course5}/>
    <Course {...courses.course6}/>
    </div>
    


    </div>
  )

}

export default AllCourses

