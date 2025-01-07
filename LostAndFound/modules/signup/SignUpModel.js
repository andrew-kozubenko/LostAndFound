class SignUpModel {
    // Возможно, здесь будут сохраняться данные или проверяться валидность
    validateInput(email, password) {
        return email.length > 0 && password.length > 0;
    }
}

export default SignUpModel;
