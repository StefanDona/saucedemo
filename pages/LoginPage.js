import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.userName = Selector("#user-name");
    this.password = Selector("#password");
    this.loginButton = Selector("#login-button");
  }

  async login(username, password) {
    await t.typeText(this.userName, username, { replace: true });
    await t.typeText(this.password, password, { replace: true });
    await t.click(this.loginButton);
    await t
      .expect(this.loginButton.exists)
      .notOk("Login button should not exist after login", { timeout: 5000 });
  }
}

export default new LoginPage();
