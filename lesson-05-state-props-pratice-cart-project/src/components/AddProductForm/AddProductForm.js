import { useState } from "react";

// Mảng Product
// State => Lưu thông tin product list
const AddProductForm = (props) => {
  const [productValues, setProductValues] = useState({
    productName: "",
    productImage: "",
    productPrice: "",
  });

  const onProductChange = (event) => {
    const { value, name } = event.target;

    //   Dynamic key in object
    setProductValues({
      ...productValues,
      [name]: value,
    });
  };

  const onProductSubmit = (event) => {
    console.log("Submit button trigger");
    // Ngăn chặn những action mặc định của HTML form
    // Không cho trang reload
    event.preventDefault();

    // Xử lý logic
    // Thêm product vào trong productList => setState
    // const newProductList = [...productList, productValues];
    // setProductList(newProductList);

    props.onAddNewProduct(productValues);

    // Clear form đi để thêm sản phẩm tiêp theo
    setProductValues({
      productName: "",
      productImage: "",
      productPrice: "",
    });
  };

  return (
    <div>
      <h5>Add new product</h5>

      <form className="mt-3" onSubmit={onProductSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product name
          </label>
          <input
            className="form-control"
            id="productName"
            placeholder="Enter your product name"
            value={productValues.productName}
            name="productName"
            onChange={onProductChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Product image (url)
          </label>
          <input
            className="form-control"
            id="productImage"
            placeholder="Enter the image of product"
            value={productValues.productImage}
            name="productImage"
            onChange={onProductChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price ($)
          </label>
          <input
            className="form-control"
            id="productPrice"
            placeholder="Enter the price of product"
            type="number"
            value={productValues.productPrice}
            onChange={onProductChange}
            name="productPrice"
          />
        </div>
        <button className="mt-3 btn btn-primary w-100" type="submit">
          Add new product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

// CRUD:
// Create
// Read (Render data to UI)
// Update
// Delete
// ref (Buổi số 8)
