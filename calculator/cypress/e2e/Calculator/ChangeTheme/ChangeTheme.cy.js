import { url } from "../../../url";
import "cypress-localstorage-commands";

describe("Change theme test", () => {
  it("Theme change is available", () => {
    cy.visit(url + "/settings");

    cy.get("select")
      .select(0)
      .should("have.value", "light")
      .get("div.sc-hHTYSt ")
      .should("have.css", "background-color", "rgb(235, 235, 235)");

    cy.get("select")
      .select(1)
      .should("have.value", "dark")
      .get("div.sc-hHTYSt ")
      .should("have.css", "background-color", "rgb(51, 51, 51)");
  });
});
