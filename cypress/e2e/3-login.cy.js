describe('Loga no Aplicação', () => {
    beforeEach(() => cy.visit('/'))
    it('Deve logar logar com sucesso', () => {
        cy.get('[id=Username]').type(Cypress.env('USERNAME'));
        cy.get('.login-button').click();

        cy.origin('https://login.microsoftonline.com', () => {
            cy.get('input[type="email"]').type(Cypress.env('USERNAME'), { log: false });
            cy.get('input[type="submit"]').click();
            cy.get('input[type="password"]').type(Cypress.env('PASSWORD'), { log: false });
            cy.get('input[type="submit"]').click();
            cy.get('input[type="button"]').click();

        })
    });
});
