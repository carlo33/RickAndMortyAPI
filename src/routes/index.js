import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Errro404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id':Character,
  '/contact':'Contact',
}

const router = async ()=> {
  const header = null||document.getElementById('header');
  const content = null||document.getElementById('content');
  header.innerHTML = await Header();
  //obeteniendo el hash despues de la pagina "/","1" o "about"
  let hash = getHash();
  console.log('hash retorna:',hash);
  //enrutando a la pagina.
  let route = await resolveRoutes(hash);
  console.log('route retorna:',route);
  //decide que se inserta  "Home","Character"
  let render = routes[route]? routes[route] : Error404;
  content.innerHTML = await render();
}

export default router;