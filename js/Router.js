const routes = {
  '': 'home',
  '/': 'home',
  '/about': 'about',
  '/error': 'error'
};

function convertRouteToComponentName(hashName) {
  if (routes[hashName]) {
    return routes[hashName];
  } else {
    return routes['/error'];
  }
}

function setHashChange(onRouteChanged) {
  if (typeof(onRouteChanged) !== typeof(Function)) {
    console.log('onRouteChanged Function must be a function');
    return;
  }

  window.addEventListener('hashchange', () => {
    const hashSplit = window.location.hash.split('#');
    const hashName = hashSplit[hashSplit.length - 1];
    onRouteChanged(convertRouteToComponentName(hashName));
  });
  
  const hashSplit = window.location.hash.split('#');
  const hashName = hashSplit[hashSplit.length - 1];
  onRouteChanged(convertRouteToComponentName(hashName));
}

export default setHashChange;
