const ProductItem = (props) => {
  const { productImage, productName, onAddToCart, productId } = props;
  return (
    <div className="card col-12 col-md-6 col-lg-4 ">
      <img src={productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <button
          onClick={() => onAddToCart(productId)}
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
