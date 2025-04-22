import { Selector, t } from "testcafe";
import Chance from "chance";

var chance = new Chance();

class ProductPage {
  constructor() {
    this.addToCartBike = Selector("#add-to-cart-sauce-labs-bike-light");
    this.shoppingCart = Selector(".shopping_cart_badge");
    this.cartQuantity = Selector(".cart_quantity");
    this.checkoutButton = Selector("#checkout");
    this.checkoutForm = Selector(".checkout_info");
    this.firstName = Selector("#first-name");
    this.lastName = Selector("#last-name");
    this.zipCode = Selector("#postal-code");
    this.continueButton = Selector("#continue");
    this.summaryInfo = Selector(".summary_info");
    this.finishButton = Selector("#finish");
  }

  async placeOrder(
    firstName = chance.first(),
    lastName = chance.last(),
    zipCode = chance.zip()
  ) {
    await t.click(this.checkoutButton);
    await t
      .expect(this.checkoutForm.exists)
      .ok("Checkout form should be visible");
    await t.typeText(this.firstName, firstName, { replace: true });
    await t.typeText(this.lastName, lastName, { replace: true });
    await t.typeText(this.zipCode, zipCode, { replace: true });
    await t.click(this.continueButton);
    await t
      .expect(this.summaryInfo.exists)
      .ok("Summary info should be visible after checkout");
    await t.click(this.finishButton);
    await t
      .expect(Selector(".complete-header").innerText)
      .eql(
        "Thank you for your order!",
        "Order should be completed successfully"
      );
  }
}

export default new ProductPage();
