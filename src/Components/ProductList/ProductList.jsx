/* eslint-disable react/prop-types */

import { AiOutlineDelete } from "react-icons/ai";

const ProductList = ({ productlist,deleteProduct }) => {
  const { id, productName, price, color,quanity,comment,purchase,visitDate} = productlist;
  return (
    <>
    <tr className="view-design">
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quanity}</td>
      <td>{price}</td>
      <td>{color}</td>
      <td>{comment}</td>
      <td>{purchase}</td>
       <td>{visitDate}</td>
      <td onClick={()=>deleteProduct(id)}>
      <AiOutlineDelete />
      </td>
    </tr>
    </>
  );
};

export default ProductList;
