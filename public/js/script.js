(function(win, doc){
    'use strict';
    // mouseover = quando passar o mouse
    // mouseout  = quando tirar o mouse
    // click     = executar uma função
    doc.querySelector('#svg2').addEventListener('mouseover', (evento)=>{ // 1ª função, pega o id do mapa
        let id = evento.target.id; // Variável vai receber o id
        doc.querySelector('#'+id).style.fill = 'rgb(32, 232, 6)';  // O que colore no svg é a propriedade fill
    });
    doc.querySelector('#svg2').addEventListener('mouseout', (evento)=>{
        let id = evento.target.id;
        doc.querySelector('#'+id).style.fill = '#b9b9b9';
    });
})(window, document)