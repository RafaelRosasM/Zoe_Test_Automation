import 'cypress-xpath';
describe("automatizacion de prueba para Zoe", () => {
  let t1=10000

  it("automation zoe page", () => {
      cy.visit("https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5")
      cy.title().should('eq','Reschedule')
      cy.log("pagina correcta")
      cy.viewport(1280, 720)
      cy.get('.meeting__schedule-edit > .jsx-2536202604').should('be.visible')
      cy.wait(t1)
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      //cambiar a Video Conference
      cy.xpath('/html/body/div/div[2]/div[3]/div[1]/div[1]/div[2]/ul/li[4]/div/button/img').click()
      cy.get(':nth-child(2) > .sc-iGgWBj > .ZUICard__container > .ZUICard__icon').click()
      cy.get('.styles_modalDashboard__meeting__RIkZZ > [data-testid="button"]').click()
      cy.get('.styles_modalDashboard__message__F3iou > span').should('have.text','Successfully changed the communication type!').type('{esc}')
      cy.log("la fucnión de cambio de 'type comunication' a Video Conference funciona correctamente")
      //cambiar a In Person
      cy.xpath('/html/body/div/div[2]/div[3]/div[1]/div[1]/div[2]/ul/li[4]/div/button/img').click()
      cy.get(':nth-child(3) > .sc-iGgWBj > .ZUICard__container > .ZUICard__icon').click()
      cy.get('.styles_modalDashboard__meeting__RIkZZ > [data-testid="button"]').click()
      cy.get('.styles_modalDashboard__message__F3iou > span').should('have.text','Successfully changed the communication type!').type('{esc}')
      cy.log("la fucnión de cambio de 'type comunication' a In Person funciona correctamente")
      //cambiar de nuevo a Phone Call
      cy.xpath('/html/body/div/div[2]/div[3]/div[1]/div[1]/div[2]/ul/li[4]/div/button/img').click()
      cy.get(':nth-child(1) > .sc-iGgWBj > .ZUICard__container > .ZUICard__icon').click()
      cy.get('.styles_modalDashboard__meeting__RIkZZ > [data-testid="button"]').click()
      cy.get('.styles_modalDashboard__message__F3iou > span').should('have.text','Successfully changed the communication type!').type('{esc}')
      cy.log("la fucnión de cambio de 'type comunication' a Phone Call funciona correctamente")
      

  })
})