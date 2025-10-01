AFRAME.registerComponent('info-panel', {
  schema: {
    title: {type: 'string', default: 'Título'},
    content: {type: 'string', default: 'Contenido del panel.'},
    color: {type: 'color', default: '#2a5298'},
    width: {type: 'number', default: 3.5},
    height: {type: 'number', default: 2.5}
  },
  init: function () {
    const el = this.el;
    const data = this.data;

    // Fondo del panel (plano simple para no bloquear el texto)
    const background = document.createElement('a-plane');
    background.setAttribute('width', data.width);
    background.setAttribute('height', data.height);
    background.setAttribute('color', data.color);
    background.setAttribute('opacity', 0.85);
    background.setAttribute('shader', 'flat');
    background.setAttribute('material', 'transparent: true;');
    el.appendChild(background);

    // Título
    const titleText = document.createElement('a-text');
    titleText.setAttribute('value', data.title);
    titleText.setAttribute('width', data.width - 0.3);
    titleText.setAttribute('align', 'center');
    titleText.setAttribute('position', `0 ${data.height/4} 0.06`); // un poco delante del plano
    titleText.setAttribute('color', '#ffd93d');
    titleText.setAttribute('shader', 'flat');
    titleText.setAttribute('wrap-count', 30);
    el.appendChild(titleText);

    // Contenido
    const contentText = document.createElement('a-text');
    contentText.setAttribute('value', data.content);
    contentText.setAttribute('width', data.width - 0.3);
    contentText.setAttribute('wrap-count', 35);
    contentText.setAttribute('align', 'center');
    contentText.setAttribute('position', `0 -0.1 0.06`); // un poco delante del plano
    contentText.setAttribute('color', '#eee');
    contentText.setAttribute('shader', 'flat');
    el.appendChild(contentText);

    // Hover elegante
    el.addEventListener('mouseenter', () => {
      background.setAttribute('opacity', 1);
      titleText.setAttribute('color', '#fff');
    });
    el.addEventListener('mouseleave', () => {
      background.setAttribute('opacity', 0.85);
      titleText.setAttribute('color', '#ffd93d');
    });
  }
});
