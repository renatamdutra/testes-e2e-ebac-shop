/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Preenchendo todas opções no checkout
        E validando minha compra ao final */

     it('deve adicionar produtos ao carrinho e finalizar compra', () => {

        cy.visit('produtos')
        cy.get(':nth-child(4) > .page-numbers').click()

        cy.get('[class="product-block grid"]')
            .contains('Deion Long-Sleeve EverCool™ Tee').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)

        cy.visit('produtos')
        cy.get(':nth-child(4) > .page-numbers').click()

        cy.get('[class="product-block grid"]')
            .contains('Electra Bra Top').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)

        cy.visit('produtos')
        cy.get(':nth-child(4) > .page-numbers').click()

        cy.get('[class="product-block grid"]')
            .contains('Eos V-Neck Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)

        cy.visit('produtos')
        cy.get(':nth-child(4) > .page-numbers').click()

        cy.get('[class="product-block grid"]')
            .contains('Erica Evercool Sports Bra').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        cy.get('#billing_first_name').type('Renata')
        cy.get('#billing_last_name').type('Machado')
        cy.get('#billing_address_1').type('Ernesto ferreira')
        cy.get('#billing_city').type('Lagoa')
        cy.get('#billing_postcode').type('95300000')
        cy.get('#billing_phone').type('54999343224')
        cy.get('#billing_email').type('teste@teste.com')

        cy.get('#terms').click()

        cy.get('#place_order').click()


    });

});