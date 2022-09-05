module.exports.routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: "home",
  },
 ,{path: '/location', component: 'location'}
 ,{path: '/reviews', component: 'reviews'}
];