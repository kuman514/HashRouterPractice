function onRouteChanged() {
  const hashSplit = window.location.hash.split('#');
  console.log(hashSplit[hashSplit.length - 1]);
}

window.addEventListener("hashchange", onRouteChanged);
