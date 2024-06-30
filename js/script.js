document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let usuario = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;

        if (usuario === "usuario@gmail.com" && senha === "123") {
            alert('Login de cliente realizado com sucesso!');
            window.location.href = 'inicioCliente.html';
        } else if (usuario === "adm@gmail.com" && senha === "123") {
            alert('Login de administrador realizado com sucesso!');
            window.location.href = 'inicioVendedor.html';
        } else {
            document.getElementById("mensagem").innerHTML = "Autenticação Inválida";
        }
    });
});
