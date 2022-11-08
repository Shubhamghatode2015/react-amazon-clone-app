import React from 'react'
import './Subtotal.css';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from "../context/reducer"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const handleclick = ()=>{
    return (
      dispatch({
        type: 'EMPTY_BASKET',
        payload : [],
    }),
    toast.info('thankyou.....!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",})
      (navigate('/'))
    )
  }
  return (
    <>
    <div className="subtotal">
      <CurrencyInput
        rendertext={(value) => (
          <>

            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
           
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displaytype={"text"}
        thousandseparator={"true"}
        prefix={"$"}
      />
 <p className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </p>
      <button onClick={handleclick}>Proceed to Checkout</button>
    </div>
    <ToastContainer />
    </>
  );
}

export default Subtotal
