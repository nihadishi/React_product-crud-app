import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function ProductForm({Inputs, ProductAdd,DeleteAll}) {
  return (
    <Form>
        <FormGroup>
            <Label for="ProductName">Product Name</Label>
            <Input type="text" name='ProductName' id='ProductName' onChange={q=> Inputs(q.target.value.trim(), 'pname')}/>
        </FormGroup>
        <FormGroup>
            <Label for="ProductPrice">Product Price</Label>
            <Input type="text" name='ProductPrice' id='ProductPrice' onChange={q=> Inputs(q.target.value.trim(), 'pprice')}/>
        </FormGroup>
        <FormGroup>
            <Label for="ProductCount">Product Count</Label>
            <Input type="text" name='ProductCount' id='ProductCount'onChange={q=> Inputs(q.target.value.trim(),'pcount')}/>
        </FormGroup>
        <Button onClick={ProductAdd}>Add</Button>
        <p></p>
        <Button onClick={DeleteAll}>Delete All</Button>
    </Form>
  )
}

export default ProductForm