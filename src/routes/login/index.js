import { h } from 'preact';
import loginStyle from  './style.css';

const Login = () => (
  <div class={loginStyle.loginPage}>
    <div class={loginStyle.title}>A Different Dating Experience.</div>
    <a class={loginStyle.defaultbtn}>Login with Google</a>
    <a class={loginStyle.defaultbtn}>Login with Facebook</a>
    <a href="/home" class={`${loginStyle.defaultbtn} ${loginStyle.fbBtn}`}>Login with Phone Number</a>
    <div>
      <a href="/" class={loginStyle.loginHelper}>Forgot your password</a>
      <a href="/" class={loginStyle.loginHelper}>I don't have an account</a>
    </div>
  </div>
);

export default Login;
