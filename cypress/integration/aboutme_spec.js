/// <reference types="Cypress" />

describe('profile AboutMe', () => {
    
    
    it('should display contacts section with email and linkedin in side drawer', () => {
        
        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-side] [data-cy=CONTACTS]')
        .as('sideSections')

        cy.get('@sideSections')
        .contains('CONTACTS')
        .should('have.class', 'lead')
        .and('match', 'h4')
        .and('be.visible')

        assert_has_one_contact_link('mailto:guillaume.pansier@gmail.com?Subject=Contact');
        assert_has_one_contact_link('https://www.linkedin.com/in/gpansier');
        assert_has_one_contact_link('/');
    });

    function assert_has_one_contact_link(link) {
        cy.get('@sideSections')
        .find('a[href="' + link + '"]')
        .should('have.length', 1)
        .and('be.visible')
    }

    it('should display skills section in side drawer', () => {

        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-side] [data-cy=skills]')
        .contains('SKILLS')
        .should('have.class', 'lead')
        .and('match', 'h4')
        .and('be.visible')
      });

      it('should display languages section in side drawer', () => {
        
        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-side] [data-cy=languages]')
        .contains('LANGUAGES')
        .should('have.class', 'lead')
        .and('match', 'h4')
        .and('be.visible')
      });

      it('should not display other sections in side drawer', () => {

        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-side] .side-section')
        .should('have.length', 3)
      });

      it('should display work experience in main drawer', () => {

        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-main] h2')
        .contains('Work Experience')
        .should('be.visible')
      });

      it('should display education in main drawer', () => {

        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-main] h2')
        .contains('Education')
        .should('be.visible')
      });

      it('should display certifications in main drawer', () => {

        cy.visit('/aboutme')

        cy.get('[data-cy=drawer-main] h2')
        .contains('Certifications')
        .should('be.visible')
      });
})
