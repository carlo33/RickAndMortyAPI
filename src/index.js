import router from './routes';
//Con window escuchamos si la pagina termino de cargarse
// para ejecutar una funcion
window.addEventListener('load', router);
window.addEventListener('hashchange',router);