import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button, Image} from 'react-bootstrap';
import {ClipLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import userActions from '../../redux/actions/user.action';
import './CartPage.css';

const CartPage = () => {
  const history = useHistory();
  const handleClickProduct = (productId) => {
    history.push(`/product/${productId}`);
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const products = useSelector((state) => state.users.cartProduct);

  const handleOrder = () => {
    dispatch(userActions.postOrder());
    dispatch(userActions.getCurrentUser());
  };

  useEffect(() => {
    dispatch(userActions.getCartProduct());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#000" size={50} loading={true} />
            </div>
          ) : (
            <ul
              className="list-unstyled d-flex flex-wrap justify-content-around"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {products &&
                products.map((product) => (
                  <li key={product._id}>
                    <Card
                      style={{
                        borderRadius: '10px',
                        padding: '1rem',
                        marginBottom: '2rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'space-around',
                        flexBasis: '10em',
                        width: '100%',
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.productId.imageUrls[0]}
                        onClick={() => handleClickProduct(product.productId._id)}
                        style={{paddingLeft: '20px', width: '100%', maxWidth: '200px'}}
                      />
                      <Card.Body style={{marginLeft: '100px', textAlign: 'start'}}>
                        <Card.Title>{product.productId.name}</Card.Title>
                        <Card.Text style={{color: 'gray'}}>
                          By: {product.productId.description}
                        </Card.Text>
                        <Card.Text>Quantity: {product.quantity}</Card.Text>
                        <Button
                          className="position-absolute btn-danger"
                          style={{
                            borderRadius: '50px',
                            height: '10px',
                            width: '20px',
                            top: '10px',
                            right: '10px',
                          }}
                          size="md"
                        ></Button>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
            </ul>
          )}
          <div style={{textAlign: 'right', width: '60vw'}}>
            Total Order Quantity: {products && products.length}
          </div>
          <div style={{textAlign: 'right', width: '60vw', marginTop: '2rem'}}>
            <Button variant="success" onClick={handleOrder}>
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
