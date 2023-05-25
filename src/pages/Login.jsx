import Header from "../components/Header";
import logo from "../assets/images/logo.svg";
import TextField from "../components/input/TextField";
import Button from "../components/Button";
function Login() {
  return (
    <>
      <Header />
      {/* <div className="relative w-full h-full"> */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-my_grey6 border border-my_grey6 border-solid  rounded-xl">
          <div className="p-10">
            <img src={logo} className="m-auto" alt="" />
            <div className="mt-8">
              <p className="text-center">Connexion</p>
              <TextField placeholder="Email" fullwidth loginBorder />
              <TextField placeholder="Mot de passe" fullwidth loginBorder />
              <div className="mt-7">
                <Button text="ME CONNECTER" login />
              </div>
              <a href="#!" className="text-my_orange font-medium">
                Mot de passe outbilé?
              </a>
            </div>
          </div>
          <hr />
          <div>
            <p className="mb-4">
              Je suis nouveau{" "}
              <a href="#!" className="text-my_orange font-medium">
                Creer un compte
              </a>{" "}
            </p>
            <button className="px-12 py-3 bg-white text-yellow rounded-md font-semibold w-full">
              Je suis un professionel
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Login;
