import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import btnIcon from '../../containers/header/header-assets/PencilAlt.png'
import start from '../../containers/header/header-assets/emojione_star.png'
import studentImg from '../../containers/header/header-assets/student.png'
import './header.css'

const Header = () => {

  return (

    <div className="header">

      <Navbar/>

      <div className="header-title">Learn the art of 
Game Dev</div>
      <div className="header-text">This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.</div>
      <button className="header-btn">

        <img src={btnIcon} alt="" />
        <div>Enroll Now</div>
        
      </button>

    <div className="student-content">


<div className="students-enrols">

<div className="header-student-enrols-container">
<button className="header-student-enrol">

      <div className="header-student-enrol-numbers">32K</div>
      <div className="header-student-enrol-expression">Students Enrolled</div>

</button>
</div>

<div className="header-student-rating-container">
<button className="header-student-rating">

      <div className="header-student-rating-start">4.7 <img src={start} /></div>
      <div className="header-student-rating-overall">Overall Rating</div>

</button>
</div>

      </div>

      <div className="header-student-image">
       <img src={studentImg}/>
      </div>

    </div>

    </div>
  )
}

export default Header