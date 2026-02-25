const {Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep} = require ('@cucumber/cucumber');


Before(function () {
  console.log("=== Before Scenario ===");
});

After(function(){
    console.log("=== After Scenario ===");
})

BeforeStep(function(){
    console.log("=== Before Step ===");
})

AfterStep(function(){
    console.log("=== After Step ===");
})

BeforeAll({name: "Set up Before All"},function(){
    console.log("=== Before All Scenarios ===");
})

AfterAll({name: "Tear down After All"},function(){
    console.log("=== After All Scenarios ===");
})