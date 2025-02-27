import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./updateItemQuantity";
import DeleteItem from "./DeleteItem";
function CartItem({ item }) {
  const { pizzaID, name, quantity, totalPrice } = item;
  // console.log(pizzaID);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="sm: flex items-center justify-between space-x-2">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaID}></UpdateItemQuantity>
        <DeleteItem pizzaId={pizzaID} />
      </div>
    </li>
  );
}

export default CartItem;
