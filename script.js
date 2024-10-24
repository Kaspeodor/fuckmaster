// script.js

// 1. Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // 2. Animação simples ao carregar a página
  window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
    });
  
    let delay = 0;
    document.querySelectorAll('section').forEach(section => {
      setTimeout(() => {
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, delay);
      delay += 200;
    });
  });
  
  // 3. Validação simples de formulário
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email)) {
      alert('Por favor, insira um endereço de email válido.');
    } else {
      alert('Formulário enviado com sucesso!');
      this.reset(); // Reseta o formulário após o envio
    }
  });
  
  // Função para validar email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  