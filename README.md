# MasterApe

## Description

This repository contains the project created for `Coderhouse` `React JS` course.

The App consists of an NTF's ecommerce in which you can filter the products according to categories, and access to detail of each product. They can be added to the cart and then complete a form simulating a complete purchase process.

Both the list of categories, as well as the products and the generated orders are stored in `Firebase`.

You can visit the deployed project at [https://masterapeecommerce.web.app/](https://masterapeecommerce.web.app/)

![test GIF.](./public/final.gif "Project view.")

## Technologies implemented

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![SweetAlert2](https://img.shields.io/badge/Sweetalert2-%23e4ae93.svg?style=for-the-badge) ![React Responsive Carousel](https://img.shields.io/badge/React_Responsive_Carousel-CA4245?style=for-the-badge&logoColor=white)

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/)
* [SweetAlert2](https://sweetalert2.github.io/)
* [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)

## Run project

You can run the project by downloading it as .zip or cloning it with:

```
git clone https://github.com/Mate0Alvarez/ecommerce-alvarez.git
cd ecommerce-alvarez
```

Install all dependencies:

```
npm install
```

Luego es necesario crear un proyecto en Firebase y crear dos colecciones en Firestore (una con el nombre `products` donde se ingresarán los productos, y otra con el nombre `categories` para almacenar las categorías que corresponden a los productos creados y se mostrarán en la NavBar). Los items de ambas colecciones deben crearse manualmente desde Firebase.

##### Item example:
```
item = {
  category_key: "1",
  description_long: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ad, voluptates consectetur ut earum dolor assumenda. Reiciendis quis quas, repellat molestias, delectus rerum iusto perferendis natus quam voluptates cumque architecto!",
  description_short: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  picture_url : "/bear1.png",
  price: "500",
  stock: "8",
  title: "Lorem ipsum"
}
```
##### Category example:
```
category = {
  key: "2",
  name: "Okay Bears",
  banner_image : "/bears_banner.png"
}
```
The `orders` collection will be created automatically when generating the first purchase order.

Once the app is available in Firebase, having loaded products and categories, rename the `.env.example` file located at the root of the project to `.env` and fill in the Firebase-provided configuration variables:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

Start server with:

```
npm start
```

The project will run in `http://localhost:3000`

## Additional comments

### MaterialUI
Material UI was chosen as the component library to streamline the application development and styling process, taking advantage of the possibility of extending the components through the use of themes.
### Firebase
The list of products, the generated orders, and the product categories was stored in Firebase.
### LocalStorage
LocalStorage was used to persist the users' cart on their devices in the event that they do not complete the purchase flow to improve the user experience.
### SweetAlert2
SweetAlert2 was chosen to get full page styled alerts and some notifications.
### React Responsive Carousel
The main landing carousel was powered by this npm library.

### Component ScrollToTop
In the latest versions of React Router Dom, the scroll is no longer automatically restored when navigating between routes, so if, for example, we are looking at the list of products and scroll down the page, when navigating to another page we will be positioned at the bottom.

To resolve this behavior, the `src/components/utils/ScrollToTop.jsx` component was implemented, which through the React Router hook `useLocation` detects the navigation between routes and restores the scroll to the top of the page.