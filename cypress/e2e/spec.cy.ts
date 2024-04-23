describe("rendering the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the localhost and shows the home page", () => {
    cy.visit("/");
  });

  it("renders the badges", () => {
    cy.getDataTest("badge-vite").contains("Vite");
    cy.getDataTest("badge-react").contains("React");
    cy.getDataTest("badge-tailwind").contains("Tailwind");
    cy.getDataTest("badge-ui").contains("Shadcn/ui");
    cy.getDataTest("badge-redux").contains("Redux");
    cy.getDataTest("badge-typescript").contains("TypeScript");
    cy.getDataTest("badge-cypress").contains("Cypress");
  });

  it("handles the increments and decrements", () => {
    cy.getDataTest("count-span").should("be.visible").contains(0);
    cy.getDataTest("decrement-button").should("be.visible").contains("-");
    cy.getDataTest("increment-button").should("be.visible").contains("+");
    cy.getDataTest("increment-button").click();
    cy.getDataTest("count-span").contains(1);
    cy.getDataTest("decrement-button").click();
    cy.getDataTest("count-span").contains(0);
  });

  it("handles the counts based on input amount in forms", () => {
    cy.getDataTest("count-span").should("be.visible").contains(0);
    cy.getDataTest("decrement-button").should("be.visible").contains("-");
    cy.getDataTest("increment-button").should("be.visible").contains("+");
    cy.getDataTest("amount-input").should("be.visible").type("2");
    cy.getDataTest("add-button").should("be.visible").contains("Add Amount");
    cy.getDataTest("asyn-button").should("be.visible").contains("Add Async");
    cy.getDataTest("odd-button").should("be.visible").contains("Add If Odd");

    cy.getDataTest("add-button").click();
    cy.getDataTest("count-span").contains(2);
    cy.getDataTest("add-button").click();
    cy.getDataTest("add-button").click();
    cy.getDataTest("count-span").contains(6);
    cy.getDataTest("decrement-button").click();
    cy.getDataTest("count-span").contains(5);
    cy.getDataTest("increment-button").click();
    cy.getDataTest("increment-button").click();
    cy.getDataTest("count-span").contains(7);
    cy.getDataTest("asyn-button").click();
    cy.getDataTest("count-span").contains(9);
    cy.getDataTest("amount-input").should("be.visible").type("6");
    cy.getDataTest("asyn-button").click();
    cy.getDataTest("count-span").contains(15);
    cy.getDataTest("odd-button").click();
    // cy.getDataTest('count-span').contains(21)
    // cy.getDataTest('increment-button').click()
    // cy.getDataTest('count-span').contains(22)
    // cy.getDataTest('odd-button').click()
    // cy.getDataTest('count-span').contains(22)
    // cy.getDataTest('increment-button').click()
    // cy.getDataTest('count-span').contains(23)
    // cy.getDataTest('odd-button').click()
    // cy.getDataTest('count-span').contains(29)
  });

  it("handles footer", () => {
    cy.getDataTest("footer-text")
      .should("be.visible")
      .contains("Click on the Vite, React and Redux logos to learn more");
  });
});
