import { useEffect , useState} from "react"
import AdminForm from '../components/UserForm';


const Home= ()=>{

    const[admins, setAdmins] = useState(null)
    useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await fetch("/createadmin")
            const json = await response.json()

            if(response.ok){
                setAdmins(json)
            }


        }
        fetchUsers()
    },[])


    return(
        <div className='home'>
           <div>
                {admins && admins.map((admin)=>(
                    <p key={admin.userName}>
                        {admin.userName}
                    </p>
                ))}

           </div>

        </div>
    )

}


export default Home