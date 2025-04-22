import LoginPage from "../pages/LoginPage";

fixture`Login Page Tests`.page`https://www.saucedemo.com/`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Login with valid credentials", async (t) => {
  await LoginPage.login("standard_user", "secret_sauce");
  await t
    .expect(LoginPage.loginButton.exists)
    .notOk("Login button should not exist after login", { timeout: 5000 });
});

test("Logout", async (t) => {
  await LoginPage.login("standard_user", "secret_sauce");
  await t.click(LoginPage.burgerMenu);
  await t.click(LoginPage.logoutButton);
  await t
    .expect(LoginPage.loginButton.exists)
    .ok("Login button should be visible after logout", {
      timeout: 5000,
    });
});

test("Login with invalid credentials", async (t) => {
  await LoginPage.login("standard_user", "gdsfs");
  await t
    .expect(LoginPage.errorMessage.exists)
    .ok("Error message should be visible after failed login");
});
