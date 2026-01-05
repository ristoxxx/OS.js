import { Application, Window } from '@osjs/client';

export default class HelloApp extends Application {
  init() {
    const win = new Window({
      title: 'Hello OS.js',
      width: 400,
      height: 200
    });

    win.on('render', () => {
      win.$content.innerHTML = `
        <div style="padding:16px">
          <h3>Tervetuloa 👋</h3>
          <p>Tämä on minimaalinen OS.js</p>
        </div>
      `;
    });

    win.render();
  }
}

