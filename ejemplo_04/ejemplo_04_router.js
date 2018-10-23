function route(pathname) {
    switch(pathname){
      case "/admin": 
      case "/usuario": 
        console.log("  --- A punto de rutear una peticion para " + pathname);
        return pathname;
      default: 
        console.log("  --- Ruta no válida " + pathname);
        return "Ruta no válida";
    }
  }
  
  exports.route = route;