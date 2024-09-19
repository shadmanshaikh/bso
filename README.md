# BSO Task Project

## Task Project :

Description of the test task:
Create a simple PWA that meets the following requirements:
- The application must be implemented as an MPA using the Astro.build framework https://astro.build/, deployment documentation: https://docs.astro.build/en/getting-started/, SSR rendering and API routes : https://docs.astro.build/en/guides/server-side-rendering/, (when --creating a project, do not select any framework and indicate the use of TypeScript)
- Backend must be implemented using Strapi Admin Panel https://strapi.io/, documentation for quick start: https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html
- In the Astro project, create login and registration pages with the fields: 1. username, 2. email, 3. password, also a product catalog page and a user's shopping cart page
- In the Strapi Admin Panel, see the user authorization documentation https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html,
- In the Strapi Admin Panel, create a Collection Type “Product” with the fields ID (UID), Title (Text), Image (Media), Price (Digit). In the Collection Type "User" add the Cart field with the Products component and the relation on the Collection "Product".
- In the Astro project, create the necessary components for the product catalog page (product card, product info window, buttons for adding and removing a product from the cart).
- In the Astro project, register API Routes to receive data from the Strapi Admin Panel: register, login, get cart, add to cart, remove from cart, get products, get product by ID
- Install the websocket plugin https://market.strapi.io/plugins/strapi-plugin-io in the Strapi Admin Panel, and set the necessary functionality for the websocket to work (sending data to the client when the collection is changed in the admin panel)
- In the Astro project, write the logic for connecting to the socket and processing the events coming from it.
- Create a manifest and ServiceWorker for the application and test them in Chrome DevTools. In the ServiceWorker, implement the logic: we only cache GET requests, while each request is checked against the cache, if there are changes, then the cache is updated

## Demo Video of the Project :

# This video is posted on youtube [watch demo](https://www.youtube.com/watch?v=b8_O5vBPni0)

## API Endpoints :

### Astro.js [client side]

http://localhost:4321

```
/register
``` 
```
/login
```
```
/user
```
```
/cart
```

- The endpoints are pretty self explanatory

### STRAPI admin panel [server side]

http://localhost:1337

- The collection Types as specified by the task description are :
  1. User
  2. Products
  3. Category (optional)
-  The component to add the product is cart where there is a relation between user and products (i.e with relation **single** user cart has **many** products )

### Adding of web sockets for broadcasting the changes to the store and service workers to get a feature PWA (progressive web app) 


