document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario-contato");

  if (!form) {
    console.error("Formulário não encontrado");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector('textarea').value;

    const numero = "5583936185746"; 

    const texto = 
      `Olá! Meu nome é ${nome}\n` +
      `Email: ${email}\n` +
      `Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
});