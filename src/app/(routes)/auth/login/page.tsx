import "./styles.scss";
import LoginForm from "@/app/_components/LoginForm/LoginForm";
import LoginGallery from "@/app/_components/LoginGallery/LoginGallery";

const Login = () => {
  return (
    <div className="container login-container">
        <section className="left-container">
          <LoginGallery/>
        </section>
        <section className="right-container">
          <LoginForm/>
        </section>
    </div>
  );
};
export default Login;