import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import CartModal from "./components/CartModal/CartModal";

const initialProducts = [
  {
    id: "1",
    productName: "IPhone 14 Pro Max",
    productPrice: 2000,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
  {
    id: "2",
    productName: "IPhone 13",
    productPrice: 3000,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
  {
    id: "3",
    productName: "BPhone Pro Max",
    productPrice: 1500,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
];

function App() {
  // State chứa danh sách những sản phẩm
  const [products, setProducts] = useState(initialProducts);

  // Cart state lưu giữ thông tin giỏ hàng
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào danh sách sản phẩm
  const onAddNewProductToProductList = (product) => {
    // Step 1: Tạo product với unique id
    const newProduct = {
      ...product,
      id: uuidv4(),
    };

    // Step 2: Clone 1 cái mảng product và thêm product vào
    const newProductList = [...products, newProduct];

    // Step 3: Cập nhật lại state
    setProducts(newProductList);
  };

  // Thêm sản phẩm vào giỏ hàng
  const onAddProductToCart = (productId) => {
    // console.log("Add new product:", productId);

    // Step 1: Tìm xem sản phẩm có id là productId nằm ở vị trí nào trong products
    const existingProduct = products.find(
      (product) => product.id === productId
    );

    // Step 2: Tìm kiếm xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    // Giống như bài toán tìm kiếm 1 phần từ đã tồn tại trong 1 mảng một chiều
    // findIndex() => Nếu tìm thấy sẽ trả về chỉ số index tồn tại
    //             => Nếu không tìm thấy => trả về -1
    const indexOfAddingProductInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    // Step 2:
    // 2.1 Nếu chưa tồn tại thì mới với quantity = 1
    if (indexOfAddingProductInCart === -1) {
      const newCartItem = {
        ...existingProduct,
        quantity: 1,
      };

      setCart([...cart, newCartItem]);
    } else {
      // 2.2 Đã tồn tại trong giỏ hàng => cập nhật quantity
      const clonedCart = [...cart];
      clonedCart[indexOfAddingProductInCart].quantity += 1;
      setCart(clonedCart);
    }
  };

  // Hàm xử lý tăng số lượng cartItem
  const onInCreaseCartQuantity = (productId) => {
    console.log(productId)
    const indexOfAddingProductInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    // 2.2 Đã tồn tại trong giỏ hàng => cập nhật quantity
    const clonedCart = [...cart];
    clonedCart[indexOfAddingProductInCart].quantity += 1;
    setCart(clonedCart);


  };

  // Hàm xử lý giảm số lượng cartItem
  const onDecreaseCartQuantity = (productId) => {
    const indexOfAddingProductInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    // 2.2 Đã tồn tại trong giỏ hàng => cập nhật quantity
    const clonedCart = [...cart];
    clonedCart[indexOfAddingProductInCart].quantity -= 1;
    setCart(clonedCart);
  };

  // Xoá sản phẩm trong giỏ hàng
  const onDeleteCartItem = (productId) => {
    console.log("Delete item:", productId);
    // productId => Xoá 1 phần tử ở trong mảng 1 chiều
    const newCartAfterRemovedItem = cart.filter(
      (cartItem) => cartItem.id !== productId
    );

    // Cập nhật state cho cart
    setCart(newCartAfterRemovedItem);
  };
  return (
    <div className="App">
      <Header cart={cart} />
      <main className="container py-3">
        <div className="row">
          <div className="col-12 col-md-3">
            <AddProductForm onAddNewProduct={onAddNewProductToProductList} />
          </div>
          <div className="col-12 col-md-8">
            <ProductList products={products} onAddToCart={onAddProductToCart} />
          </div>
        </div>
      </main>
      <CartModal cart={cart}
        onDeleteCartItem={onDeleteCartItem}
        onInCreaseCartQuantity={onInCreaseCartQuantity}
        onDecreaseCartQuantity={onDecreaseCartQuantity} />
    </div>
  );
}

export default App;

/*
  - Quản lý form dựa vào state
    + onChange
      + dynamic key
    + onSubmit
      + event.preventDefault()

  - Lifting state up: Đặt state đúng vị trí để đễ dàng sharing cho 
  các componnet con khác cần dùng
  - Data down (one-way data binding): dữ liệu chỉ 
  truyền từ cha xuống con
  - Event up: khi có 1 event từ component con mà muốn
  component cha biết

  - State change => UI re-render
*/
