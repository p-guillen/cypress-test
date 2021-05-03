describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.com/uniandes');
        cy.wait(1000);
        randomEvent(5);
    })
})

function randomEvent(monkeysLeftEvents) {

    function getRandomEventInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeftEvents = monkeysLeftEvents;

    var randomEventNumber = getRandomEventInt(0, 3)

    if(monkeysLeftEvents > 0) {
        switch(randomEventNumber) { 
            case 0: { 
                console.log("It is a randomClick.");
                randomClick(1)
               break; 
            } 
            case 1: { 
                console.log("It is a randomButton.");
                randomButton(1)
               break; 
            } 
            case 2: { 
                console.log("It is a randomTextBox.");
                randomTextBox(1)
               break; 
            } 
            case 3: { 
                console.log("It is a randomComboBox.");
                randomComboBox(1)
               break; 
            } 
         } 
         monkeysLeftEvents = monkeysLeftEvents - 1;
         cy.wait(1000);
         randomEvent(monkeysLeftEvents);

    }  
    

}

function randomClick(monkeysLeft) {

    function getRandomIntC(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomIntC(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomButton(monkeysLeft) {

    function getRandomIntB(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('button').then($buttons => {
            var randomButton = $buttons.get(getRandomIntB(0, $buttons.length));
            if(!Cypress.dom.isHidden(randomButton)) {
                cy.wrap(randomButton).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomTextBox(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($textbox => {
            var randomTextBox = $textbox.get(getRandomInt(0, $textbox.length));
            if(!Cypress.dom.isHidden(randomTextBox)) {
                cy.wrap(randomTextBox).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomComboBox(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('button').then($combobox => {
            var randomComboBox = $combobox.get(getRandomInt(0, $combobox.length));
            if(!Cypress.dom.isHidden(randomComboBox)) {
                cy.wrap(randomComboBox).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}