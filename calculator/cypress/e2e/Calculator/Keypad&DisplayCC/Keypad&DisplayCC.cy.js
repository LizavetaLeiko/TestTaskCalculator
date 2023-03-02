import { url } from "../../../url";

describe("Keypad and calculate test", () => {
  it("Keypad has buttons", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN").eq(0).should("have.text", "C");
    cy.get("button.sc-gswNZR.wcGEN").eq(1).should("have.text", "7");
    cy.get("button.sc-gswNZR.wcGEN").eq(2).should("have.text", "8");
    cy.get("button.sc-gswNZR.wcGEN").eq(3).should("have.text", "9");
    cy.get("button.sc-gswNZR.wcGEN").eq(4).should("have.text", "*");
    cy.get("button.sc-gswNZR.wcGEN").eq(5).should("have.text", "-");
    cy.get("button.sc-gswNZR.wcGEN").eq(6).should("have.text", "4");
    cy.get("button.sc-gswNZR.wcGEN").eq(7).should("have.text", "5");
    cy.get("button.sc-gswNZR.wcGEN").eq(8).should("have.text", "6");
    cy.get("button.sc-gswNZR.wcGEN").eq(9).should("have.text", "/");
    cy.get("button.sc-gswNZR.wcGEN").eq(10).should("have.text", "+");
    cy.get("button.sc-gswNZR.wcGEN").eq(11).should("have.text", "1");
    cy.get("button.sc-gswNZR.wcGEN").eq(12).should("have.text", "2");
    cy.get("button.sc-gswNZR.wcGEN").eq(13).should("have.text", "3");
    cy.get("button.sc-gswNZR.wcGEN").eq(14).should("have.text", "=");
    cy.get("button.sc-gswNZR.wcGEN").eq(15).should("have.text", ".");
    cy.get("button.sc-gswNZR.wcGEN").eq(16).should("have.text", "(");
    cy.get("button.sc-gswNZR.wcGEN").eq(17).should("have.text", "0");
    cy.get("button.sc-gswNZR.wcGEN").eq(18).should("have.text", ")");
    cy.get("button.sc-gswNZR.wcGEN").eq(19).should("have.text", "CE");
  });

  it("Buttons can be clicked with expression and result output", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "1")
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "1+1")
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2");

  });

  it("Symbol replacement is possible", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(12)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2+")
      .get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2-")
      .get("button.sc-gswNZR.wcGEN")
      .eq(4)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2*")
      .get("button.sc-gswNZR.wcGEN")
      .eq(9)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2/");
  });
  
  it("Addiction operation is possible", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2");
  });

  

  it("Subtraction operation is possible", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "0");
  });

  it("Multiplication operation is possible", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(4)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(13)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "3");
  });

  it("Devision operation is possible", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(6)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(9)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(12)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2");
  });

  it("Expression can be with negative values", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "-")
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "-2");
  });

  it("Can calculate a complex expression", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(16)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(8)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(3)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(18)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(4)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(12)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(9)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(13)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "-1");

  });

  it("The expression can be cleared after getting the result", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "-")
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(5)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(0)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "");
  });

  it("Can be deleted the last symbol of the expression", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(19)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "1+")
      .get("button.sc-gswNZR.wcGEN")
      .eq(19)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "1");
  });

  it("Can calculate with fractional expression", () => {
    cy.visit(url);

    cy.get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(15)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(10)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(15)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(11)
      .click()
      .get("button.sc-gswNZR.wcGEN")
      .eq(14)
      .click()
      .get("p.sc-pyfCe.iCUbFs")
      .should("have.text", "2.2");
  });
});
