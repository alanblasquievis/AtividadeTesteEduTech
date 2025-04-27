describe("Teste da Página de Comentários", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/cypress/cypress/e2e/");
    });

    it("Verifica os elementos visíveis", () => {
        cy.contains("h1", "Deixe seu comentário").should("be.visible");
        cy.get("#submit-button").should("be.visible");
        cy.get("#comment-section").should("be.visible");
    });

    it("Verifica textos nos botões", () => {
        cy.get("#submit-button").invoke("text").then((text) => {
            expect(text.trim()).to.eq("Cadastrar"); // Ajuste conforme o HTML
        });
    });

    it("Verifica atributos nos campos", () => {
        cy.get('input[name="nome"]').should("have.attr", "placeholder", "Digite seu nome");
        cy.get('textarea[name="comentario"]').should("have.attr", "placeholder", "Escreva seu comentário aqui");
    });
});
