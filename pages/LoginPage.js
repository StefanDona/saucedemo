import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.userName = Selector("#user-name");
    this.password = Selector("#password");
    this.loginButton = Selector("#login-button");
    this.errorMessage = Selector("h3[data-test='error']");
    this.burgerMenu = Selector("#react-burger-menu-btn");
    this.logoutButton = Selector("#logout_sidebar_link");
  }

  async login(username, password) {
    await t.typeText(this.userName, username, { replace: true });
    await t.typeText(this.password, password, { replace: true });
    await t.click(this.loginButton);
  }
}

export default new LoginPage();
