'use strict';

const Database = use("Database") ; 

class AuthController {
    async login  ({view , request , respone })  {
        return view.render("login") 
}
    
    loginUser({view , request , response}){
        const { username , password } = request.body
        //? {_csrf:"" , username :"" , password:""}
        
        return respone.redirect("/login")
    }

    register({view}){
        return view.render("register") ;
    }


    // * -> async 
    async registerUser({request , response}) {
        const {username, email , password } = request.body
        
        await Database.insert({ username, password, email }).into("users") ;  //yield -> await 

        return response.redirect("/register")
        
    }
}


module.exports = AuthController ;
