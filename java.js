
function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let idade = document.getElementById("idade").value.trim();
  
    if (nome === "" || email === "" || senha === "" || telefone === "" || idade === "") {
      alert("Por favor, preencha todos os campos!");
      return false;
    }
  
    // Validação do numero de telefone 
    let regexTelefone = /^\d{9,11}$/;
    if (!regexTelefone.test(telefone)) {
      alert("Telefone inválido! Digite apenas números (9 a 11 dígitos).");
      return false;
    }

    // Validação de idade
    if (isNaN(idade) || idade<= 0 ) {
        alert("Idade invalida! Digite um n[umero maior que zero.")
        return false;
    }
  

    
    return true;
  }
  
  // função para limpar Formulario
  function limparFormulario() {
    document.getElementById("formCadastro").reset();
  }
  
  // função para enviar Formulario
  function enviarFormulario() {
    if (validarFormulario()) {

      // campos de comfirmação do usuario
      let usuario = {
        nome: document.getElementById("nome").value.trim(),
        email: document.getElementById("email").value.trim(),
        senha: document.getElementById("senha").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        idade: document.getElementById("idade").value.trim()
      };
  
      
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      usuarios.push(usuario);
  

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
      alert("Usuário cadastrado com sucesso!");
  
      limparFormulario();
    }
  }
  