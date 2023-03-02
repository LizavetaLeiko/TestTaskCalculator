import { url } from "../../../url";
import "cypress-localstorage-commands";

describe("Settings test", () => {
  it("Settings has title", () => {
    cy.visit(url + "/settings");

    cy.get("h2").eq(0).should("have.text", "Settings");
  });

  it("Settings has select", () => {
    cy.visit(url + "/settings");

    cy.get("select").select(0).should("have.value", "light");
    cy.get("select").select(1).should("have.value", "dark");
  });

  it("Settings has history clear button", () => {
    cy.visit(url + "/settings", {
      onBeforeLoad(win) {
        win.localStorage.setItem("history", "[2]");
      },
    });

    cy.get("button").should("have.text", "Clear all history").click();
    cy.getLocalStorage("history").should("equal", null);
  });
});
