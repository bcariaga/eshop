# eshop


## TL;DR
para correr el proyecto anda directo a [Setup & Run](#Setup-&-Run)


## Intro

Hola! en este proyecto es una _demo_ funcional de un eshop, cuenta con 3 _vistas_:
- Busqueda de productos: Nos brinda un input para poder hacer una busqueda de productos (contra la api de MeLi)
- Listado de productos: Nos muestra los productos encontrados junto a su imagen, precio, titulo, condicion y tipo de envio.
- Detalle de un producto: Ademas de los datos que ya se ven en el listado tenemos: Imagen com mas resolucion, Descripcion y cantidad de productos vendidos.

## Arquitectura - Stack

### Backend

Stack:
- NodeJS (>14)
    + Express (>4.17)
    + Axios
- Jest (tests)

Es un BFF simple donde se hace _wrapping_ de las api de MeLi:
- https://api.mercadolibre.com/sites/MLA/search?q=:q para realizar una busqueda
- https://api.mercadolibre.com/items/:id para obtener el detalle de un producto
- https://api.mercadolibre.com/items/:id/description para obtener la descripcion de un producto

#### Estructura
- Lib
    + `controllers`: punto de entrada de los _routes_ orquestan los parametros recibidos y se comunican con los _services_ para gestionar los datos
    + `services`: saben donde y como buscar la informacion
    + `models`: conocen como se deben presentar los datos (y como convertir los datos externos en datos del dominio)
    + `routes`: las rutas y configuracion de los handlers (para derivar a los controllers)
    + `middleware`: se creo un _custom middleware_ para agregar una firma a todos los requests
    
Sripts disponibles (con npm):
- `npm start` : levanta una instancia del backend en _localhost_ el puerto se lee de `.env` (si no se cambio es 4000)
- `nom test` : corre los tests y muestra el coverage actual.

#### TODO:

Algunas features no se completaron aun: 
- [ ] Manejo de errores
- [ ] Configuracion de CORS (deja pasar todo)
- [ ] Coverage: se cubren solo los casos _criticos_ 

### Frontend

> _Aca se pone divertido!_

Para el front se planteo una arquitectura de micro-frontends, pensando en la facilidad que nos da esto para orquestar distintos **equipos de desarrollo**, **_deploys_ mas chicos** y con menos impacto, posibilidad de mejorar la _performance_ en **cada modulo**, reutilización real de componentes/librerias, y algunas ventajas mas.

Stack:
- ReactJS (>17)
    - ReactJSS (>10)
- Webpack
    - Weppack Module Federation 😎
- Jest
- React Testing Library

#### Estructura

El proyecto se forma por **5 microfonts**:
- `host`: es el proyecto raiz, el encargado de orquestar y cargar los otros modulos (aunque cada modulo de por si, puede cargarse solo*), tiene un pequeño context + state (`useContext` + `useReducer`) para manejar el estado de los modulos _invitados_. No se opto por `redux` o algo mas potente como `sagas` para manejar este estado (y sus side-effects) porque la complejidad es casi nula, de hecho se podria evitar usar el contexto con algunos cambios en el backend.
- `lib`: este modulo contiene los componentes que se comparten, por ejemplo: `<ItemPrice/>` que se usa tanto en la busqueda como en el detalle de un producto. O bien, funciones de ayuda, como para generar `styles` con media queries (gracias a `ReactJSS`).
- `product-detail-mf`: componentes para ver el detalle de un item. Recibe un ID, busca en el backend el detalle y lo renderiza.
- `search-box-mf`: barra de busqueda, maneja el estado del form de busqueda. Se opto por un form para resolver la navegacion y no tener que manejar el estado en **_componentes controlados_**. Cuando se realiza una busqueda ejecuta una funcion que se pasa por parametros.
- `search-resul-mf`: **busca productos** y los **renderiza** aislando esta feature en un modulo 😁

<sub> *_se pueden cargar solos, pero hay componentes que sin pasarle las props correctas no serian funcionales (nada que con un poco de ❤️ no se pueda arreglar)_ <sub>

Sripts disponibles en cada modulo (con npm):
- `npm start`: levanta el proyecto con `webpack` en localhost (el puerto esta _hardcore_ en cada `webpack.config.js` _friendly reminder: no lo cambies_)
- `npm run build`: hace build y deja el modulo listo en `/dist`, lo vamos a usar para crear las imagenes de docker (si, si, hay soporte para `Docker` 😎)
- `npm test`: corre los tests con jest y muestra el coverage (por si no quedaba claro 😜)
- `npm run lint`: no hace falta explicar...

#### Estilos

Nota aparte para los estilos de la solucion. Se opto por usar `React-JSS` para crear componentes con estilos individuales (util para los microfronts) y reducimos el tamaño del bundle.
Lamentablemente, se genera mucho codigo que no hace a la solucion. Lo ideal seria contar con una libreria de componentes que resuelva la parte visual.

#### TODO:

Algunas features no se completaron: 
- [ ] Mejorar el SEO con un SSR vendria de 10 💯
- [ ] react-helmet: mejoraria un poco la accesibilidad y SEO.
- [ ] Optimizar la generacion de bundles: https://webpack.js.org/guides/code-splitting/
- [ ] Agregar una libreria de componentes, no escala usar CSS-in-JS 😰

### Setup & Run

Se usa `Lerna` para gestionar todos los modulos.

#### Local:
1. `npm i` -> instalamos las dependencias
2. `npm start` -> Levanta todos los servicios, el proyecto host esta en : http://localhost:3000

#### Recomendado: Docker

Si! podemos correrlo con docker, mejoramos la performance porque se corre en modo `production` y solo se sirven los bundles resultantes del _publish_.
Nota: cada MF tiene su docker image, montando sobre un ngnix (`nginx:1.21.0-alpine`) los bundles generados previamente con `npm build`. 
Para el backend se usa la imagen `node:14-alpine`

Nuevamente aprovechamos `lerna` y lo podemos levantar corriendo:
1. `npm i`: (opcional si ya se instalaron los modulos)
2. `npm run start:docker`: esto hace un publish de cada modulo y usa `docker-compose` para levantar los servicios.

Para parar los servicios podemos correr `npm run stop:docker`

### Extra
 desde la raiz tmb se puede correr los tests de todos los proyectos: `npm run test`