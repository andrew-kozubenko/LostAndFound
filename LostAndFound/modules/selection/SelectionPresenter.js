export default class SelectionPresenter {
    constructor(view) {
        this.view = view; // Привязываем View
    }

    onLoginPressed() {
        this.view.navigateToLogin();
    }

    onSignUpPressed() {
        this.view.navigateToSignUp();
    }
}
