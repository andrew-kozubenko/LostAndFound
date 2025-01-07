class LoginPresenter {
    constructor(navigation) {
        this.navigation = navigation;
    }

    onLogin(email, password) {
        if (email && password) {
            console.log('User logged in:', { email, password });
            this.navigation.navigate('Home');
        } else {
            console.log('Error: Email and password are required');
        }
    }
}

export default LoginPresenter;
