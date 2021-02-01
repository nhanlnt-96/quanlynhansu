import React from 'react';

export const LoginPage = () => {
    return (
        <div className="login-border">
            <div className="login-title">
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <div className="login-content">
                <input type="text" placeholder="Tên đăng nhập" required={true} />
                <input type="password" placeholder="Mật khẩu" required={true} />
                <button>ĐĂNG NHẬP</button>
            </div>
        </div>
    );
}