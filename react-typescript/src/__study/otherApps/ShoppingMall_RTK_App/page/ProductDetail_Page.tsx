import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { fatchProductDetail } from '../redux/module/product';


const ProductDetail_Page:React.FC = () => {

  const dispatcher = useDispatch();
  const {id} = useParams<string>();


  // const [product, setProduct] = useState<JSON_OBJ>();
  // const product = useSelector((state:RootState)=>state.product.productList[0]);
  const product = useSelector((state:RootState)=>state.product.productList[0]);

  const getProductDetail = ():void => {
    dispatcher<any>(fatchProductDetail(id));
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <Row>
            {product?.title}
          </Row>
          <Row>
            {product?.price}
          </Row>
          <Row>
            {product?.choice? "choiceTrue":"ChiceFalse"}
          </Row>
          <Row>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size?.map((element, index)=> (
                <Dropdown.Item key={index} href="#/action-1">{element}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          </Row>
          <Row>
            <Button>추가</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail_Page