document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de registro, como enviar para um servidor
    alert(`Email: ${email}\nSenha: ${password}`);
});