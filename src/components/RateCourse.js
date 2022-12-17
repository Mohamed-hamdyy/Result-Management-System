
import Star from "./Star";
import { useState } from "react";

function RateCourse({ onChange },props) {
  const[id,setID]=useState(1);
  const [rating, setRating] = useState(0);
  const[review,setReview]=useState("");
  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };
const handlereview=(event)=>{
setReview(event.target.value)


}
const rateCourse= async (a,b,c)=>{
  const response = await fetch('http://localhost:7000/api/addcourserating',{
    method:"POST",
    headers:{
       "content-type":"application/json; charset=UTF-8"


    },
    body:JSON.stringify({
       courseID:a,
       rating:b,
       review:c
       


    })
  });
      const json = await response.json()
      console.log(json);
  }


const handleRateCourse=async (event)=>{
  event.preventDefault();
  await(rateCourse(id,rating,review))


}








  return (



<div className="card">

<div>
    <h1 className="ratetext">Have any feedback? Please rate this course. </h1>
</div>
    <h2>
        Rate Course
    </h2>
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
    <br/>
    <div className="rowww">
    <input type="text" placeholder="add your review" onChange={handlereview}></input>
    <br/>
    <button className="btn-rate" onClick={handleRateCourse}>
          Submit
        </button>
        </div>
</div>
  );
}


export default RateCourse;