import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login_container">
      <div className="login_logo">JUSTGRAM</div>
      <form className="login_form">
        <input
          className="login_input"
          type="email"
          placeholder="전화번호,사용자 이름 또는 이메일"
        />
        <input
          className="login_input"
          type="password"
          minLength={5}
          placeholder="비밀번호"
        />
        <button className="login_button">로그인</button>
      </form>
      <div>
        <div className="divider"></div>
      </div>
      <div href="" className="forget_password">
        비밀번호를 잊으셨나요?
      </div>
    </div>
  );
}

export default Login;
