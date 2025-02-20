import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold uppercase md:text-3xl">
        The best pizza.
        <br />
        <span className="tracking-wide text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser></CreateUser>
    </div>
  );
}

export default Home;
