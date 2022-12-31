





function Filtercourses(){

    const [pricefrom, setpricefrom] = useState('');
    const [subject, setsubject] = useState('');
    const [priceto, setpriceto] = useState('');
    const [courses, setcourses] = useState('');
    const [titles, settitles] = useState('');

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
  
        
            fetch('http://localhost:7000/api/filtercourses',
              {
              method:'POST',
              headers:{
                "Content-type":"application/json; charset=UTF-8"
              },
            
              body: JSON.stringify({
                userName:"inst1",
                pricefrom:pricefrom,
                priceto:priceto,
                subject:subject
             
              })
             
                })
                .then(res => {
                  return res.json()
                })
                .then(data => {
                    settitles(data)
                    console.log(data)
                  })
              
            
                  };


}