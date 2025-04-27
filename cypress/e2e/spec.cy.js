describe('Fluxo de acesso EduTech', () => {
  
  it('Navegação pública: deve ir da home para o login', () => {
    cy.visit('http://127.0.0.1:5500/home.html')
    cy.contains('Entrar').click()
    cy.url().should('include', '/login.html')
  })

  it('Login com sucesso: deve logar e ir para o painel', () => {
    cy.visit('http://127.0.0.1:5500/login.html')
    cy.get('#email').type('aluno@edutech.com')
    cy.get('#senha').type('curso123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/painel.html')
    cy.contains('Bem-vindo, aluno!')
  })

  it('Login inválido: deve mostrar mensagem de erro', () => {
    cy.visit('http://127.0.0.1:5500/login.html')
    cy.get('#email').type('aluno@edutech.com')
    cy.get('#senha').type('senhaerrada')
    cy.get('button[type="submit"]').click()
    cy.on('window:alert', (msg) => {
      expect(msg).to.contains('E-mail ou senha incorretos!')
    })
  })

  it('Acesso protegido: deve redirecionar para login se não logado', () => {
    cy.clearLocalStorage()
    cy.visit('http://127.0.0.1:5500/meus-cursos.html')
    cy.url().should('include', '/login.html')
  })

  it('Logout: deve voltar para o login', () => {
    cy.visit('http://127.0.0.1:5500/login.html')
    cy.get('#email').type('aluno@edutech.com')
    cy.get('#senha').type('curso123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/painel.html')
    cy.get('#logout').click()
    cy.url().should('include', '/login.html')
  })

})
