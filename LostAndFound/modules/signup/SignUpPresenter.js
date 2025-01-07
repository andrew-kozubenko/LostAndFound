class SignUpPresenter {
    constructor(navigation) {
        this.navigation = navigation;
    }

    onSignUp(email, password) {
        if (email && password) {
            console.log('User registered:', { email, password });
            this.navigation.navigate('Home');
        } else {
            console.log('Error: Email and password are required');
        }
    }
}

export default SignUpPresenter;
