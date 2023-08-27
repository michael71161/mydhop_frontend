import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectMyCart, addItemToCart, deleteCart, removeItemFromCart} from './cartSlice'
import { addOrderAsync, selectOrderisLoading, selectOrderError, selectOrderSent } from '../Orders/orderSlice';
import { selectToken } from '../Login/loginSlice';
import LoaderSmall from '../LoaderSmall';
import Button from 'react-bootstrap/Button';


const Cart = () => {
  //constants and use selector 

  const notify = () => toast.success("order complete");
  const myCart = useSelector(selectMyCart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0)
  const isLoading = useSelector(selectOrderisLoading)
  const orderError = useSelector(selectOrderError)
  const orderSent = useSelector(selectOrderSent)
  const token = useSelector(selectToken)

// count total price of the cart

const sumTotal =() =>{
  let subtotal = 0;
    myCart.map((item) => (subtotal = Number(subtotal) + Number(item.amount*item.price)));
    setTotal(Number(subtotal))
}

  
  
  //update display when sumTotal chanfe and myCart length change
  useEffect(() => {
    sumTotal();
  }, [myCart.length, myCart])

  useEffect(() => {
    if (orderError) {
    alert("Error, order didnt sent! Try again later  ")
    
    }
  }, [orderError]);

  useEffect(() => {
    if (orderSent) {
    alert("Order has been sent successfully")
    
    
    
    
    }
  }, [orderSent]);






  
//Display to user
  return (
// if loggdin = True proceed to following , shorthand if 
    <div align="center">
      <br/>
      <br/>
      <p> {isLoading && <div><LoaderSmall/></div>} </p>
      <br/>
      <br/>
      <div>
      {/* creating a table for the cart display  */}     
      <table style={{border:"3px solid black",fontFamily:"arial",borderCollapse: "collapse",width:"70%",height:"60%",margin:"20px"}}>
  <tr>
    <th>Product </th>
    <th>Price</th>
    <th>Amount</th>
  </tr>
  
  {myCart && myCart.map(prod => (<tr>
    <td>{prod.desc}</td>
    <td>{prod.price} &nbsp;&nbsp; ₪</td>
    <td><button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: 1 ,total: 1}))}> + </button>
    &nbsp; {prod.amount} &nbsp;
    <button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: -1, total: 1 }))}> - </button>
    </td>
    <td> <Button variant="outline-danger" onClick={() => dispatch(removeItemFromCart(prod._id))}>Remove item &nbsp;&nbsp; <i className="fas fa-trash-can"></i></Button></td>
    </tr> ))}
</table>
<br/>
<h3 align="center">Total amount:{total}₪</h3>
<br/>
<p>
<Button variant="outline-success" disabled={isLoading} onClick={() =>{;notify();dispatch(addOrderAsync({ myCart, token }));dispatch(deleteCart())}}> <i class="fa-solid fa-wallet"></i>  {isLoading ? "Sending Order" : " Make order"} </Button>
</p>
<br/>
<br/>
<h6><i>*If you provided real Email address you will get confirmation via Email</i></h6>


<p>
{orderError && <h5> Error, order didnt sent! Try again later </h5>}
{orderSent && <h5> Order has been sent successfully  </h5>}

  </p>   
        
      
        
     
      </div>
    </div>
  )
}

export default Cart