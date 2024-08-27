    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('#menu ul');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('disable');
    });

    function navigate(page){
      document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('disable');
      });
      document.getElementById(page).classList.remove('disable');
    }

    function submit(){
      const contato = {
        nome : document.getElementById('nome').value,
        telefone : document.getElementById('phone').value,
        email : document.getElementById('email').value
      };
    }

  