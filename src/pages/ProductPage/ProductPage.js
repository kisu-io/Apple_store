import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Button, Card, Col, Container, Row} from 'react-bootstrap';
import productActions from '../../redux/actions/product.action';
import Pagination from '../../components/Pagination';
import {ClipLoader} from 'react-spinners';
import {useHistory} from 'react-router-dom';
import userActions from '../../redux/actions/user.action';
import './ProductPage.css';

const ProductPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [addingProductToCart, setAddingProductToCart] = useState(false);
  const limit = 10;
  const totalPage = 5;

  const history = useHistory();
  const handleClickProduct = (productId) => {
    history.push(`/product/${productId}`);
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const errorMessage = useSelector((state) => state.products.errorMessage);

  const addToCart = (product) => {
    // console.log(product);
    setAddingProductToCart(product?._id);
  };

  useEffect(() => {
    if (addingProductToCart) {
      dispatch(userActions.addToCart({addingProductToCart}));
    }
  }, [addingProductToCart]);

  useEffect(() => {
    dispatch(productActions.getAllProducts({pageNum, limit}));
  }, [dispatch, pageNum, limit]);

  return (
    <Container>
      <Row>
        <Col>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#000" size={50} loading={true} />
            </div>
          ) : (
            <ul className="list-unstyled d-flex flex-wrap justify-content-around pt-10">
              {products.map((product) => (
                <li key={product._id} onClick={() => handleClickProduct(product._id)}>
                  <Card
                    style={{
                      width: '20rem',
                      padding: '1rem',
                      borderRadius: '10px',
                      backgroundColor: 'light-gray',
                    }}
                    className="card cardAnimation mx-1 mt-5"
                  >
                    <Card.Title style={{fontWeight: 'bold'}}>{product.name}</Card.Title>

                    <Card.Img
                      className="product-img"
                      variant="top"
                      style={{borderRadius: '10px'}}
                      src={`${product.imageUrls[0]}`}
                    />
                    <Card.Body
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '10px',
                      }}
                    >
                      <Card.Text>
                        <strong>Price:</strong> {product.price.toLocaleString()} VND
                      </Card.Text>
                    </Card.Body>
                    <div>
                      <Button className="mx-2" variant="dark " onClick={() => addToCart(product)}>
                        Add to Cart
                      </Button>
                      <Button className="mx-2" variant="success">
                        Buy Now!
                      </Button>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Col>
        <Pagination
          style={{margin: '30px auto 30px auto'}}
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPage}
        />
      </Row>
    </Container>
  );
};

export default ProductPage;
