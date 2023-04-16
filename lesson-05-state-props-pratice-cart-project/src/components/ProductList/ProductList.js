import ProductItem from "../ProductItem/ProductItem";

const ProductList = (props) => {
  const { products, onAddToCart } = props;

  return (
    <div>
      <h6>Product List</h6>
      {/* JSX, array => JSX */}
      {/* {[<p>hello</p>, <span>Hi</span>]} */}
      <div className="row">
        {/* {productElements} */}
        {products.map((product) => {
          const { productImage, productName, id } = product;
          return (
            <ProductItem
              productImage={productImage}
              productName={productName}
              onAddToCart={onAddToCart}
              productId={id}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

// Cách 2
// let productElements = [];

// for (let product of products) {
//   const { productImage, productName } = product;
//   const newProductElement = (
//     <div className="card col-12 col-md-6 col-lg-4 ">
//       <img src={productImage} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{productName}</h5>
//         <button onClick={onAddToCart} className="btn btn-primary">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );

//   productElements.push(newProductElement);
// }
