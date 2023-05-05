import React from 'react'
import { Button, Table } from 'reactstrap'

function ProductTable({data,Editthis,Removethis}) {
  return (
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Edit</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {data && (data.map(x=> {
                return(
                    <tr>
                        <td>{x.pid}</td>
                        <td>{x.pname}</td>
                        <td>{x.pprice}</td>
                        <td>{x.pcount}</td>
                        <td><Button onClick={Editthis(x.pid)}>Edit</Button></td>
                        <td><Button onClick={Removethis(x.pid)}>Remove</Button></td>
                    </tr>
                )
            }))}
        </tbody>
    </Table>
  )
}

export default ProductTable