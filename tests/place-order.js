import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";

fixture`Product Page Tests`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Add bike light to cart", async (t) => {
  await t.navigateTo("https://www.saucedemo.com/");
  await LoginPage.login("standard_user", "secret_sauce");
  await t.click(ProductPage.addToCartBike);
  await t.click(ProductPage.shoppingCart);
  await t
    .expect(ProductPage.cartQuantity.innerText)
    .eql("1", "Cart should contain 1 item");
  await ProductPage.checkout();
});
