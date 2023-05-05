import axios from 'axios'
import React, { useEffect,useState } from 'react'

function Complectderornot() {
    const [datas, setdatas] = useState([])
    const [complected, setcomplected] = useState(0)
    const [uncomplected, setuncomplected] = useState(0)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((d)=>{
            setdatas(d);
        })
    },[])
    setcomplected(datas.filter(q=> q.complected==true))
    setuncomplected(datas.filter(q=> q.complected!=true))
  return (<>
   <h1>{datas.length}</h1>
   <h1>{complected.length}</h1>
   <h1>{uncomplected.length}</h1>
   </>)
}

export default Complectderornot