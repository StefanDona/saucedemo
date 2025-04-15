import loginModel from "../pageModels/loginModel";

fixture`Login Page Tests`.page`http://example.com/login`;

test("Login with valid credentials", async (t) => {
  await t.navigateTo("https://www.saucedemo.com/");
  await loginModel.login("standard_user", "secret_sauce");
});
