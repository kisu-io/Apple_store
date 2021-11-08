import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import productActions from '../../redux/actions/product.action';
import userActions from '../../redux/actions/user.action';
import './DetailPage.css';

const DetailPage = () => {
  const [addingProductToCart, setAddingProductToCart] = useState(false);
  const [review, setReview] = useState('');
  const params = useParams();
  const productId = params.id;
  const rating = 5;

  const product = useSelector((state) => state.products.singleProduct);

  const loading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

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
    dispatch(productActions.getSingleProduct({productId}));
  }, [productId]);
  const handleReviewInput = (e) => {
    e.preventDefault();
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    dispatch(userActions.postReview({review, productId, rating}));
  };
  return (
    <Container>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#fff" size={50} loading={true} />
        </div>
      ) : (
        <Row
          className="border mt-5 py-5 product-card"
          style={{
            borderRadius: '20px',
          }}
        >
          <Col>
            {product && <img className="w-100" src={product?.imageUrls[0]} alt="ProductImage" />}
          </Col>
          <Col>
            {product && (
              <>
                <h2>{product?.name}</h2>
                <p style={{color: 'gray'}}>
                  {' '}
                  <em>{product.description}</em>
                </p>
                <div>
                  <strong>Price: </strong>
                  {product.price.toLocaleString()} VND
                </div>
                <div>
                  <strong>In stock:</strong> {product?.stock}
                </div>
                <br />
                <div>
                  <Button className="btn-detail" onClick={() => addToCart(product)} variant="dark">
                    Add to Cart
                  </Button>
                </div>
                <br />
                <div>
                  <strong>Review This Product</strong>
                  <br />
                  <textarea
                    className="review"
                    key="review"
                    rows="5"
                    cols="50"
                    onChange={handleReviewInput}
                  ></textarea>
                </div>
                <br />
                <div>
                  <Button className="btn-detail" variant="dark" onClick={handleReviewSubmit}>
                    Send review
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DetailPage;
