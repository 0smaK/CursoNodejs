function route(pathname,response) {
    switch(pathname){
      case "/admin": 
      case "/usuario": 
        console.log("  --- A punto de rutear una peticion para " + pathname);
        response.write("<h3>"+pathname+"</h3>")
        return pathname;
      default: 
        console.log("  --- Ruta no válida " + pathname);
        response.write("<span style='color:red'><b>Error:</b> ruta no válida </span> ::: <b>"+pathname+"</b>");
    }
  }
  
  exports.route = route;