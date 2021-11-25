import Component from './Component';
import setHashChange from './Router';

class App extends Component {
  constructor(initState, initProps) {
    super(initState, initProps);

    this.onRouteChanged = (item) => {
      switch (item) {
        case 'home':
          console.log('loading home');
          break;
        case 'about':
          console.log('loading about');
          break;
        case 'error':
          console.log('loading error');
          break;
      }
    };

    setHashChange(this.onRouteChanged);
    
    this.render = () => {
      this.rootElement.textContent = 'Default Render';
    };
  }
};

new App();
