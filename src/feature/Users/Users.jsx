import { useEffect , useState} from "react"



 


function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function TraerUsuarios () {

        await fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((data) => {setUsers(data.users)})
        .catch((error) =>setError(`Error en la peticion para obtener los usuarios, fallo en la url ${error}`))

        setLoading(false)
    }
    
    
    useEffect(() => {

        TraerUsuarios()
    },[])

  return (
    <>
      <div className="relative overflow-x-auto">
        {loading ? <h1>Loading...</h1> : 
            error ? <h1>{error}</h1>:
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="px-6 py-3">Id</th>    
                <th scope="col" className="px-6 py-3">Firts Name</th>
                <th scope="col" className="px-6 py-3">Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        }
      </div>
    </>
  )
}


export default Users