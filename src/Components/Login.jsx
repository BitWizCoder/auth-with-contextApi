const Login = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <form className="flex justify-center flex-col items-center">
        <h1 className="mt-8 mb-5 text-center text-2xl">Login with Email and password.</h1>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <button className="btn btn-neutral">Login</button>
      </form>
    </div>
  );
};

export default Login;
