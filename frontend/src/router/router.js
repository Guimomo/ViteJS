import { cargarView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoControllers.js";
import { categoriaController } from "../views/categorias/categoriaControllers.js";
import { homeController } from "../views/inicio/homeControllers.js";
import { crearProductosController } from "../views/productos/crearProductoController.js";
import { crearCategoriaController } from "../views/categorias/crearCategoriaControllers.js";
import { editarCategoriaController } from "../views/categorias/editarCategoriaControllers.js";

const routes = {
    
    home: {
        "template": "inicio/index.html",
        controlador: homeController
    },
    productos: {
        "template": "productos/index.html",
        controlador: productoController
    },
    crearProductos: {
        "template": "productos/crear.html",
        controlador: crearProductosController
    },
    categorias: {
        "template": "categorias/index.html",
        controlador: categoriaController
    },
    crearCategorias: {
        "template": "categorias/crear.html",
        controlador: crearCategoriaController
    },
    "editarCategoria/:id": {
        "template": "categorias/editar.html",
        controlador: editarCategoriaController
    },


};

export const router = async (app) => {

    const hash = location.hash.slice(1); //eliminar el # de la url
    const {template, controlador} = matchRoute(hash); //comprobar si la ruta existe
    //console.log(match);
    //llamando la vista
    await cargarView(app, template); //cargar la vista por defecto al cargar la pagina
    //ejecutar el controlador
    //?

    // Ejecutar el controlador
    controlador(); // Ejecutar el controlador después de cargar la vista
}

const matchRoute = (hash) => { 

    const arreglo = hash.split('/') ;  

  for (const route in routes) {
    const b = route.split('/') ;    
    
    if (b.length !== arreglo.length) continue
    
    const params = {}

    const matched = b.every( (parte, i) => {    

      if (parte.startsWith(":")) {  

        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true
      }

      if (parte === arreglo[i]){
        return true
      }

    });

    /**
     * Si la ruta coincide con el hash de la URL (matched === true),
     * se retorna un nuevo objeto que contiene todas las propiedades de la ruta encontrada
     * (como 'template' y 'controlador') y además se agrega el objeto 'params'.
     * 
     * El objeto 'params' contiene los parámetros dinámicos extraídos de la URL,
     * por ejemplo, si la ruta es "editarCategoria/:id" y la URL es "#editarCategoria/3",
     * entonces params = { id: "3" }.
     * 
     * Esto permite que el controlador correspondiente reciba los parámetros necesarios
     * para cargar o manipular los datos específicos de la ruta dinámica.
    */

    if (matched === true) {

        return { ...routes[route], params }; // Retornar la ruta y los params
    }

    console.log(params);
    
    

    if (route === hash) {
      return routes[route];
    }
  }
    
    // for (const route in routes) {
    
    //     //
    //     // console.log(route, "= ", hash);
    //     //console.log(route);
        
    //     if (!hash) {
    //         //si no hay hash, se carga la vista por defecto
    //         return routes['home']; //retorna la ruta por defecto
            
    //     }

    //     if (route === hash) {
    //         console.log("la ruta existe");
    //         return routes[route]; //retorna la ruta que coincide con el hash
    //     }
    // }
    
}
