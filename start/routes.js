'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.get("/index","AuthController.index");


Route.on('/').render('cars')
Route.get("/cars","AuthController.cars");

Route.on('/').render('services')
Route.get("/services","AuthController.services");

Route.get("/add_car","AuthController.add_car")
Route.post("/add_car","AuthController.add_car_data")
Route.post("/api/add_car","AuthController.add_car_data")

//Route.on('/login').render('login')
Route.get("/login","AuthController.login");
Route.post("/login" , "Authcontroller.loginUser")

Route.get("/register","AuthController.register")
Route.post("/register","AuthController.registerUser")
Route.post("/api/register","AuthController.registerUser")

Route.get("/cars","AuthController.cars");
Route.post("/cars" , "Authcontrooler.cars_cardb")
Route.post("/api/cars","AuthController.cars_cardb")

