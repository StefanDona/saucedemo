import LoginPage from "../pages/LoginPage";

fixture`Login Page Tests`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Login with valid credentials", async (t) => {
  await t.navigateTo("https://www.saucedemo.com/");
  await LoginPage.login("standard_user", "secret_sauce");
});
