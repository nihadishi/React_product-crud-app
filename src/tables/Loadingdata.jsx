import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

function Loadingdata() {
    const [datas, setdatas] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((q)=>{
        setdatas(q.data);
        setloading(false)

      })
      .catch(q=>{
        setloading(true)
      })
    }, [])
    

  return (
    <>
    {loading? <div>ABCDEFGHIJKLMNOPRSTUVWXYZ</div>:
      <Table>
        <thead>
            <tr>
                <td>Name</td>
                <td>username</td>
                <td>Company Name</td>
            </tr>
        </thead>
        <tbody>
           {datas.map(q=>  <tr>
                <td>{q.name}</td>
                <td>{q.username}</td>
                <td>{q.address?.city}</td>
            </tr>
            )} 
           
        </tbody>
        </Table>}
  </>
  )
}

export default Loadingdata