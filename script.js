let requisicaoURL = 'https://www.luizpicolo.com.br/api.json';
let requisicao = new XMLHttpRequest();
requisicao.open('get', requisicaoURL);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = function() {

   class Noticia{
      constructor(titulo){
        this.titulo = titulo;
      }
      mostrar_noticia(){
        return `<h1>${this.titulo}<h1>`
       
      }
    }
  
  let personagens = requisicao.response;
  const elemento = document.getElementById('list');
  
  let titulo = `<h1>Noticia</h1>`;
  elemento.insertAdjacentHTML('afterbegin', titulo);

  personagens.articles.forEach(personagem => {
    let noticia = new Noticia(personagem.autor)
    elemento.insertAdjacentHTML('beforeend', noticia.mostrar_noticia());
  });
}

