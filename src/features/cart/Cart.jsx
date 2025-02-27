import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cardSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart></EmptyCart>;
  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-sl mt-7 font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((item, index) => {
          console.log(item);
          return <CartItem key={index} item={item}></CartItem>;
        })}
      </ul>
      <div className="mt-6 space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}

        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
