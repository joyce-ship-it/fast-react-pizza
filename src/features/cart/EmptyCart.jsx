import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="py-4">
      <Link to="/menu" className="text-blue-400 hover:text-blue-700">
        &larr; Back to menu
      </Link>

      <p className="pt-4 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
