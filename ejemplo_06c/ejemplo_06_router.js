function route(handle, pathname) {
    // (typeof handle[pathname] === 'function')
    if (handle.hasOwnProperty(pathname)) {
      console.log("A punto de rutear una peticion para " + pathname);
      return handle[pathname]();
    } else {
      console.log("No se encontro manipulador para " + pathname);
      return "404 No Encontrado";
   }
  }
  
  exports.route = route;