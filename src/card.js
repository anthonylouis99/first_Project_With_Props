import starImg from "./Images/Star.png"

function Card(props) {

    return(
        <section >
        <div className="card-div">
         <div className="card-img">
              <div>
            <p>{props.status}</p>
         </div>
            <img alt="" src={props.img}/>
         </div>
         <div className="Card-text">
          <img src={starImg} alt=""/><p>5.0 <span>(6).USA</span></p>
          <p>{props.text}</p>
          <h4>{props.pricing}<span>/{props.NGN}</span></h4>
         </div>
        </div> 
        </section>
    )
}

export default Card