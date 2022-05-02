class WebPage {
  home() {
    cy.visit('/')
    cy.get('div#panel_test_one').should('be.visible')
    cy.get('div#panel_heading_one').should('be.visible')
  }

  // Buttons
  verify() {
    cy.get('div h3#heading_one').contains('Buttons')
    cy.get('div.text-center > p button#btn_one').click()
    cy.get('div.text-center > p button#btn_two').click()
    cy.get('div.text-center > p button#btn_link').click()

    cy.get('div.text-center > p button#btn_one').should('not.be.visible')
    cy.get('div.text-center > p button#btn_two').should('not.be.visible')
    cy.get('div.text-center > p button#btn_link').should('not.be.visible')

    // Iframe Buttons
    cy.get('div#iframe_panel').should('be.visible')
    cy.get('div h3#heading_iframe').contains('IFrame Buttons')
    cy.get('div#iframe_panel_body').should('be.visible')
    cy.get('iframe[ src="buttons.html"]')
    
    cy.get('button#btn_one').should('not.be.visible')
    cy.get('button#btn_two').should('not.be.visible')
    cy.get('button#btn_link').should('not.be.visible')

    cy.get('div#panel_test_two').should('be.visible')
    cy.get('div h3#heading_two').contains('Fields')
    cy.get('div#panel_body_two').should('be.visible')
    cy.get('div#form_group').should('have.text', 'Reset Fields')
    cy.get('div#form_group input#first_name').type('Vinicius Santos')
    cy.reload(true)
    cy.get('div h3#heading_one').contains('Buttons')
    cy.get('div.text-center > p button#btn_one').click()
    cy.get('div.checkbox input#opt_three').check()
    cy.wait(1000)
    cy.get('select#select_box').select(1).contains('ExampleTwo')

    cy.get('div#panel_size_three').should('be.visible')
    cy.get('div#panel_heading_three')
    cy.get('div h3#heading_one').contains('Image Asserts')
    cy.get('img[src="https://i.imgur.com/1vsaEJB.jpg"]').should('be.visible')  
  }

}

export default new WebPage;