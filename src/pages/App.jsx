import { useEffect, useState } from "react";
import "../Components/ProductList/Product.css";
import ProductList from "../Components/ProductList/ProductList";
import { getProductFromLs } from "../Components/getProductFromLs";

const App = () => {
  const [products, setProducts] = useState(getProductFromLs());

  // set state
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [quanity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [comment,setComment] = useState ('')
  const [purchase,setPurchase] = useState('')
  const [visitDate,setVisitDate] = useState ("")

  const productListHandaler = (e) => {
    e.preventDefault();
    const sameIdMass = [];
    products.map((product) => {
      sameIdMass.push(product.id);
    });

    // create a single object
    const product = {
      id,
      productName,
      quanity,
      price,
      color,
      comment,
      purchase,
      visitDate
    };

    if (!sameIdMass.includes(product.id)) {
      setProducts([...products, product]);
    } else {
      alert("same id issue");
    }
    emptyInput();
  };

  const emptyInput = () => {
    setId("");
    setColor("");
    setPrice("");
    setProductName("");
    setQuantity("");
    setComment('')
    setPurchase('')
    setVisitDate("")
  };


  const deleteProduct = (id) => {
    const productFiltered = products.filter((product) => product.id !== id);
    setProducts(productFiltered);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="product-container">
      <div className="product-content">
        <div className="main-content">
        <h1>Product List</h1>
      <p>Show and add new book list with localStorage</p>

          <form onSubmit={productListHandaler} className="form-content">
            <div className="flex-content">
            <div className="form-first-part">
              <label>ID:</label>
              <br />
              <input
                type="number"
                onChange={(e) => setId(e.target.value)}
                value={id}
                className="form-control"
                required
              />
              <br />
              <label>Product Name:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                className="form-control"
                required
              />
              <br />
            </div>
         
            <div className="form-second-part">
              <label>Quantity:</label>
              <br />
              <input
                type="number" min={1}
                onChange={(e) =>
                setQuantity(e.target.value)}
                value={quanity}
                className="form-control"
                required
              />
              <br />
              <label>Price:</label>
              <br />
              <input
              type="number" min={50} onChange={(e) =>setPrice(e.target.value)}value={price} className="form-control" required/>
              <br />
            </div>
            </div>

            <div className="form-third-part">
              <div>
              <label htmlFor="colors">Choose a Color:</label>
              <br />
              <select required
                id="colors" className="select-color" onChange={(e) => setColor(e.target.value)}value={color}>
                <option>Choose color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
              </select>
              </div>

              <div className="purs-condition">
                <label>Do you want to purchase it? </label>
              <label> Yes
        <input
          type="radio"
          value="Yes"
          checked={purchase === 'Yes'} 
          onChange={(e)=>setPurchase(e.target.value)}
        />
        
      </label>

      <label> No
        <input
          type="radio"
          value='No'
          checked={purchase === 'No'} 
          onChange={(e)=>setPurchase(e.target.value)}
        />
      </label>
              </div>

              <div className="purse-date">
                <label>Date: </label>
                    <input style={{padding:'4px 2px',outline:'none'}} type="date" onChange={(e)=>setVisitDate(e.target.value)} name="" id="" />
              </div>
            </div>

            <label>Comment:</label> <br />
              <textarea  style={{padding:'2px 5px', resize:'none'}} className="text-area" id="text-area" cols="87" rows="0px" maxLength={30} 
              onChange={(e)=>setComment(e.target.value)}value={comment}></textarea>
            <div className="submit-btn">
              <button  className="btn-success">Submit</button>
            </div>
          </form>
        </div>
        <div className="view-content">
          {products.length > 0 && (
            <>
                
              <table className="table-reponsive">
          
                <thead className="thead-design">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>COLOR</th>
                    <th>COMMENT</th>
                    <th>PURCHASE</th>
                    <th>DATE</th>
                    <th style={{background:'red'}}>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ProductList
                      key={product.id}
                      productlist={product}
                      deleteProduct={deleteProduct}
                    />
                  ))}
                </tbody>
              </table>
              <div className="rev-btn">
                <button className="btn-danger" onClick={() => setProducts([])}>
                  Remove All
                </button>
              </div>
            </>
          )}

          {products.length < 1 && <div>You did not add any product</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
