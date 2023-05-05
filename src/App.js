import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
function App() {
  const [countid, setcountid] = useState(3)
  const [products, setproducts] = useState([]);
  
  const Objprod = {
    pid: countid,
    pname: '...',
    pprice: '...',
    pcount: '...'
  }
  const [Objproduct, setObjproduct] = useState(Objprod)

  const Inputs = (value,type) =>{
    setObjproduct((x)=>({ ...x, [type]:value}))
  }

  const ProductAdd = () =>{
    setproducts([...products,Objproduct])
    setcountid(countid)
  }
  let DeleteAll = () =>{
    setproducts([])  
  }
  let Editthis = (xid) =>{
      
  }
  let Removethis = (xid) =>{
    let filterRemove = products.filter(q=> q.xid !== xid)
    setproducts(filterRemove);
  }
  return (
    <Container>
      <Row>
        <Col><ProductForm Inputs={Inputs} ProductAdd={ProductAdd} DeleteAll = {DeleteAll}/></Col>
        <Col><ProductTable data={products} Editthis={Editthis} Removethis={Removethis} /></Col>
      </Row>
    </Container>
  );
}

export default App;
