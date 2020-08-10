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

//Route.on('/login').render('login')
Route.get("/login","AuthController.login");
Route.post("/login" , "Authcontrooler.loginUser")

Route.get("/register","AuthController.register")
Route.post("/register","AuthController.registerUser")
Route.post("/api/register","AuthController.registerUser")
