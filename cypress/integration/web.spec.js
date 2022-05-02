import web from '../pages/WebPage';

beforeEach(() => {
  cy.log('I run before every test in every spec file!')
})

afterEach(() => {
  cy.log('I run after every test in every spec file!')
})

describe("Acessar a home page", () => {
  it("Acessar a página WEBJUMP, para teste QA", function () {
    web.home()
    web.verify()
  })
})