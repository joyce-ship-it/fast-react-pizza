import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
export default function Header() {
  return (
    <>
      <header className="font-pizza flex justify-between border-b-2 border-stone-400 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          Fast React Pizza
        </Link>
        <SearchOrder></SearchOrder>
        <UserName></UserName>
      </header>
    </>
  );
}
