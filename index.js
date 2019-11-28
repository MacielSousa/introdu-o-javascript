//Basico2 - Eventos(window X document)
/**
 * Diferença entre window e document, window é minha janela agora document e o site!
 * window temos acesso ao historico do usuario, dá refresh na janela
 * mudar propriedade da janela por exemplo abrir uma nova janela
 */
window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});