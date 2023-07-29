import React from 'react'
import './ourWork.css'
import Img1 from './ourWork-assets/Imgw1.jpg'
import Img2 from './ourWork-assets/Imgw2.jpg'
import Img3 from './ourWork-assets/Imgw3.jpg'
import Img4 from './ourWork-assets/Imgw4.jpg'
import Img5 from './ourWork-assets/Imgw5.jpg'
import Img6 from './ourWork-assets/Imgw6.jpg'

function OurWork() {

  return (

    <div className="ourWork">

   <h2>  What our stduent were able to build during our courses </h2>

   <div className="sercive1">
  <h3>1. Platformer Game</h3>
  <div className="sercive1-group">
    <img src={Img1} alt="Platformer Game Screenshot" />
    <p>
      Build a 2D platformer game, learning game design, player movement, level creation, and collision detection.
      Technologies: React/Phaser, HTML5, JavaScript.
    </p>
  </div>
</div>

<div className="sercive2">
  <h3>2. Puzzle Game</h3>
  <div className="sercive2-group">
    <img src={Img2} alt="Puzzle Game Screenshot" />
    <p>
      Create engaging puzzle games, covering tile-matching, puzzle generation, and win conditions.
      Technologies: React/Unity, HTML/CSS, JavaScript/C#.
    </p>
  </div>
</div>

<div className="sercive3">
  <h3>3. Top-Down Shooter</h3>
  <div className="sercive3-group">
    <img src={Img3} alt="Top-Down Shooter Screenshot" />
    <p>
      Develop a top-down shooter with player movement, enemy AI, projectiles, and scoring.
      Technologies: React/Phaser/Unity, HTML5, JavaScript/C#.
    </p>
  </div>
</div>

<div className="sercive4">
  <h3>4. Endless Runner</h3>
  <div className="sercive4-group">
    <img src={Img4} alt="Endless Runner Screenshot" />
    <p>
      Craft an endless runner with infinite level generation, player control, and item spawning.
      Technologies: React/Phaser/Unity, HTML/CSS, JavaScript/C#.
    </p>
  </div>
</div>

<div className="sercive5">
  <h3>5. RPG (Role-Playing Game)</h3>
  <div className="sercive5-group">
    <img src={Img5} alt="RPG Screenshot" />
    <p>
      Immerse in RPG development, creating game environments, quests, character progression, and narratives.
      Technologies: React/Phaser/Unity, HTML/CSS, JavaScript/C#.
    </p>
  </div>
</div>

<div className="sercive6">
  <h3>6. Tower Defense</h3>
  <div className="sercive6-group">
    <img src={Img6} alt="Tower Defense Screenshot" />
    <p>
      Build a tower defense game with strategic tower placement, pathfinding, and enemy waves.
      Technologies: React/Phaser/Unity, HTML/CSS, JavaScript/C#.
    </p>
  </div>
</div>



    </div>

  )
}

export default OurWork