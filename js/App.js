function onRouteChanged() {
  console.log(window.location.hash);
}

window.addEventListener("hashchange", onRouteChanged);
