class LoginModel {
    // Простая проверка входных данных
    validateCredentials(email, password) {
        return email.length > 0 && password.length > 0;
    }
}

export default LoginModel;
