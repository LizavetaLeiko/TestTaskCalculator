import { url } from "../../../url";

describe("Header test", () => {
  it("Header exist", () => {
    cy.visit(url);

    cy.get("header");
  });

  it("Header has title", () => {
    cy.visit(url);
    cy.get("h1.sc-fnGiBr.jEDXHZ")
      .should("have.text", "Calculator App")
      .should("be.visible");
  });

  it("Header has links", () => {
    cy.visit(url);

    cy.get("a.sc-fEXmlR.fjFcrt.active")
      .eq(0)
      .should("have.text", "Home (CC)")
      .should("be.visible");
    cy.get("a.sc-fEXmlR.fjFcrt")
      .eq(1)
      .should("have.text", "Home (FC)")
      .should("be.visible");
    cy.get("a.sc-fEXmlR.fjFcrt")
      .eq(2)
      .should("have.text", "Settings")
      .should("be.visible");
  });

  it("Heare links redirect", () => {
    cy.visit(url);

    cy.get("a.sc-fEXmlR.fjFcrt").eq(0).click();
    cy.url().should("include", "/");

    cy.get("a.sc-fEXmlR.fjFcrt").eq(1).click();
    cy.url().should("include", "/fc");
    cy.go("back");

    cy.get("a.sc-fEXmlR.fjFcrt").eq(2).click();
    cy.url().should("include", "/settings");
    cy.go("back");
  });
});
