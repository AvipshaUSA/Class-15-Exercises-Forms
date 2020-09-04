let form = document.querySelector("form")
form.addEventListener("submit", function(event){
//console.log(input.value)
  let testName = document.querySelector("input[name=testName]")
  let testDate = document.querySelector("input[name=testDate]")
  let rocketType = document.querySelector("input[name=testName]")
  let boosterCount = document.querySelector("input[name= boosterCount]")
  let windRating = document.querySelector("input[name=windRating]")
  let productionServers =document.querySelector("input[name=productionServers]")
  alert("submit clicked")
  if(testName.value=== "" || testDate.value === "" || rocketType.value === "0" || boosterCount.value ==="" || windRating.value=== "" || productionServers.value ==="off")
  alert("all fields are required")
  //console.log("input.name")
//let button = document.getElementById("runSimulator")
//button.addEventListener("click", function(event){
  //let 
});