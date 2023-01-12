import React from "react";
import './CourseDetails.css'



export function CourseDetails(props){


return (
    <div>
<div className="main">
<div className="all">
    <div className="rowD">
<h2 className="headers">Title:</h2>
<h2 className="values">{props.course.title}</h2>
</div>
<div className="rowD">
<h2 className="headers">Subject:</h2>
<h2 className="values">{props.course.subject}</h2>
</div>
<div className="rowD">
<h2 className="headers">Price:</h2>
<h2 className="values">{props.course.price}</h2>
</div>
<div className="rowD">
<h2 className="headers">Rating:</h2>
<h2 className="values">{props.course.rating}</h2>
</div>
<div className="rowD">
<h2 className="headers">Total Hours:</h2>
<h2 className="values">{props.course.totalHours}</h2>
</div>
</div>



</div>
</div>
);

}
export default CourseDetails;