let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
function makeEquation(value){
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation', calculation)

}
function displayCalculation(){
    document.querySelector('.result').innerHTML = calculation;
}