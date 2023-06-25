
const headers = {
    accept: "application/json",
    
  };



 export const VerifyToken = async (a,b) => {
    const response = await fetch('http://localhost:7000/verifyUser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        token: a,
        role:b
     

      }) 
    })
    const json = await response.json();

    if(json.message=="redirect"){
      window.location.href='/Login';
       return false;
    }
    return true;
  }


  export default VerifyToken;