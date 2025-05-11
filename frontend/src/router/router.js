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
    
    
    for (const route in routes) {
    
        //
        // console.log(route, "= ", hash);
        //console.log(route);
        
        if (!hash) {
            //si no hay hash, se carga la vista por defecto
            return routes['home']; //retorna la ruta por defecto
            
        }

        if (route === hash) {
            console.log("la ruta existe");
            return routes[route]; //retorna la ruta que coincide con el hash
        }
    }
    
}
