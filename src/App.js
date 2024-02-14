import svg from "./Images/airbnb-logo.svg";
import image1 from"./Images/car-image1.jpg";
import image2 from "./Images/car-image2.jpg";
import image3 from "./Images/car-image3.jpg";
import image4 from "./Images/car-image4.jpg";
import image5 from "./Images/car-image5.jpg";
import image6 from "./Images/car-image6.jpg";
import image7 from "./Images/car-image7.jpg";
import image8 from "./Images/car-image8.jpg";
import image9 from "./Images/car-image9.jpg";
import"./App.css"

function TopSec(props) {

  return(
    <div className="top-sec">
<div className="image-div">
             <nav>
        <img src={svg} alt="" />
      </nav>

 <img src={image1} alt="" />
  <img src={image2} alt="" />
   <img src={image3} alt="" />
    <img src={image4} alt="" />
     <img src={image5} alt="" />
      <img src={image6} alt="" />
       <img src={image7} alt="" />
        <img src={image8} alt="" />
         <img src={image9} alt="" />

      </div>
      <div>
<h1>Online Experiences</h1>
<p>
  join unique interactive activities led by <br/>
  one-of-a-kind hosts- all without leaving<br/> home
</p>
</div>
    </div>
  )
  
}

export default TopSec