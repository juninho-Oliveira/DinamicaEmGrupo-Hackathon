function entrar(){

    let valor = document.getElementById('nome').value;
    const locaStorage = localStorage.setItem('key', valor);
   
    window.location.href = "/primeiraTelaUser/";

}
  
let myItem = localStorage.getItem('key');

if(myItem) {
    let nomeUser = document.getElementById("nome-user");
    nomeUser.textContent = myItem
}

console.log(myItem)
