


function Editsubtitle(){



    const [Courses, setCourses] = useState('');
    const [CourseID, setCourseID] = useState('');
    const [preview, setrasetpreviewtings] = useState('');



    useEffect(() =>{
   fetch('http://localhost:7000/api/filtercoursesubjectinstructor',
     {
     method:'POST',
     headers:{
       "Content-type":"application/json; charset=UTF-8"
     },
   
     body: JSON.stringify({
       instructoruUsername:"inst1",
     })
    
       })
       .then(res => {
         return res.json()
       })
       .then(data => {
         setCourses(data)
         console.log(data)
         
  
       })
   
     },[]);


     const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/editpreview',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            courseID:courseID,
            preview:preview
          })
         
            })
            .then(res => {
              return res.json()
            })

          
        
              };
}