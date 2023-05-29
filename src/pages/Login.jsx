import Header from "../components/Header";
import logo from "../assets/images/logo.svg";
import TextField from "../components/input/TextField";
import Button from "../components/Button";
function Login() {
  return (
    <>
      <Header />
      <div className="h-full lg:h-screen mt-4 flex justify-center items-center">
        <div className="w-full sm:w-96 text-center px-4">
          <div className="bg-my_grey6 border border-my_grey7 border-solid  rounded-xl">
            <div className="p-5 md:p-10">
              <img src={logo} className="m-auto" alt="" />
              <div className="mt-8">
                <p className="text-center">Connection</p>
                <TextField placeholder="Email" fullwidth loginBorder login />
                <TextField placeholder="Password" fullwidth loginBorder login />
                <div className="mt-7 mb-2">
                  <Button text="Sign In" fullwidth login />
                </div>
                <a href="#!" className="text-my_orange font-medium">
                  Forgot password ?
                </a>
              </div>
            </div>
            <hr className="border border-my_grey7" />
            <div className="px-5 md:px-10 pt-5 pb-5 md:pb-10">
              <p className="mb-4">
                I am new{" "}
                <a href="#!" className="text-my_orange font-medium">
                  Create an account
                </a>{" "}
              </p>
              <button className="px-12 py-3 bg-white text-yellow rounded-md font-semibold w-full whitespace-normal sm:whitespace-nowrap">
                I am a professional
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
