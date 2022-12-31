


function Filtercoursesubjectinstructor(){


    const [pricefrom, setpricefrom] = useState('');
    const [subject, setsubject] = useState('');
    const [priceto, setpriceto] = useState('');
    const [courses, setcourses] = useState('');
    const [title, settitle] = useState('');
    const [data, setdata] = useState('');


    useEffect(() =>{
        fetch('http://localhost:7000/api/instructorCourses',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            userName:"inst1",
          })
         
            })
            .then(res => {
              return res.json()
            })
            .then(data => {
              setcourses(data)
      
            })
        
          },[]);


          const handleSubmit = async(event) => {
  
        
            fetch('http://localhost:7000/api/filtercoursesubjectinstructor',
              {
              method:'POST',
              headers:{
                "Content-type":"application/json; charset=UTF-8"
              },
            
              body: JSON.stringify({
                instructorUsername:"inst1",
                title:title,
                subject:subject
             
              })
             
                })
                .then(res => {
                  return res.json()
                })
                .then(data => {
                    setdata(data)
                    console.log(data)
                  })
              
            
                  };






}