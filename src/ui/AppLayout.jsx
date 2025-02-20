import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../utils/Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  //   console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader></Loader>}
      {/* {true && <Loader></Loader>} */}
      <Header></Header>
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* <h1>Content</h1> */}
          <Outlet></Outlet>
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
}
