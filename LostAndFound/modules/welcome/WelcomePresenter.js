export default class WelcomePresenter {
    constructor(view) {
        this.view = view; // Привязываем View
    }

    onContinuePressed() {
        // Переход на следующий экран
        this.view.navigateToSelection();
    }
}
