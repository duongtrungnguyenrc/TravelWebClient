import LoginForm from "@/app/_components/LoginForm/LoginForm";
import LoginGallery from "@/app/_components/LoginGallery/LoginGallery";

const Login = () => {
  return (
    <div className="container">
        <LoginGallery/>
        <LoginForm/>
    </div>
  );
};
export default Login;