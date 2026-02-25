const {Given, When, Then} = require('@cucumber/cucumber');
const {Greeter}  = require('../Greeter');
const assert = require('assert');

When('the greeter says hello', function () {
           // Write code here that turns the phrase above into concrete actions
           this.WhatIHeard = new Greeter().sayHello();
           console.log("message is ", this.WhatIHeard);
});
Then('I should have heard {string}',{timeout:1*1000}, function (response) {
           // Write code here that turns the phrase above into concrete actions
           assert.strictEqual(this.WhatIHeard,response,);
           console.log("Assertion step completed for ", response);
});
When('the greeter says goodbye', function () {
           // Write code here that turns the phrase above into concrete actions
           this.HeardGoodBye = new Greeter().sayGoodbye();
           console.log("message is ", this.HeardGoodBye);
         });
