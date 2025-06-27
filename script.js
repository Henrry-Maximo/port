
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString(`Desenvolvedor <span style="color: #7c3aed">Web FullStack</span> Node.js & React.js`)
  .pauseFor(1500)
  .deleteAll()
  .typeString('Olá, tudo bem?')
  .pauseFor(1000)
  .start();
