describe("Quotes App", () => {
    beforeEach(() =>{
    cy.visit("http://localhost:3000")
    })
//HELPERS
    const nameInput = () => cy.get("input[name=username]")
	const emailInput =() => cy.get("input[name=email]")
	const passwordInput =()=> cy.get("input[name=password]")
	const tosBtn=()=> cy.get("input[name=tos]")

//TESTS

    it("sanity check to make sure tests work", ()=>{
        expect (1+2).to.equal(3);
    })
    it("the proper elements are showing", () =>{
		nameInput().should("exist")
		emailInput().should("exist")
		passwordInput().should("exist")
		tosBtn().should("exist")
    })

    describe("Filling out the inputs and cancelling", ()=>{
		it("can navigate to the site", () =>{
			cy.url().should("include", "localhost")
		})
        it("can type in the inputs", () =>{
			nameInput().should("have.value", "").type("lorem ipsum").should("have.value", "lorem ipsum")
			emailInput().should("have.value", "").type("lorem ipsum").should("have.value", "lorem ipsum")
            passwordInput().should("have.value", "").type("lorem ipsum").should("have.value", "lorem ipsum")
        })
        it("can click the Terms of Service button", ()=>{
            tosBtn().should("have.value", "on").click()
            tosBtn().should("have.value", "off")
        })
        it("can submit form data", ()=>{
            nameInput().type("test")
            emailInput().type("test@test.com")
            passwordInput.type("test1234")
            
        })
        it("check if any input is empty", () =>{
            nameInput().should("not.be.empty")
            emailInput().should("not.be.empty")
            passwordInput().should("not.be.empty")
            tosBtn().should("not.be.empty")
        })
    })
})
