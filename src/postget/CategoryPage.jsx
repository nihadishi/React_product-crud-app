import React, { useState,useEffect } from 'react'
import axios from 'axios';


function CategoryPage() {
    const [datas, setdatas] = useState([])

   useEffect(() => {
    axios.get('https://northwind.vercel.app/api/categories')
    .then((e)=> {setdatas(e.data)})
   }, [])
   



   const DeleteData = (ids) =>{
    axios.delete(`https://northwind.vercel.app/api/categories/${ids}`)
   }
   const EditData = (ids) =>{

   }

    return(<>
    <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>description</td>
                    <td>name</td>
                    
                </tr>
            </thead>
            <tbody>
                {datas.map(e=> 
                <tr>
                <td>{e.id}</td>
                <td>{e.description}</td>
                <td>{e.name}</td>
                <td><button onClick={DeleteData(e.id)}>delete</button></td>
                <td><button onClick={EditData(e.id)}>Edit</button></td>
            </tr>)
                }
            </tbody>
        </table></>)
}

export default CategoryPage
