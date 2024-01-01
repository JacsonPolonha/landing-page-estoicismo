function changeTab(tabId) {
    // Esconder todos os conteúdos da guia
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('active');
    }

    // Mostrar o conteúdo da guia clicada
    document.getElementById(tabId).classList.add('active');

     // Destacar visualmente a guia clicada
     event.currentTarget.classList.add('active');
  }