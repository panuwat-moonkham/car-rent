'use strict'

class AuthController {
    login({view, request, response}){
    const name = "Panuwat"
    const age= 20;
    const friends = ["aaa","bbb","ccc","ddd"]
    const address = {
        postcode:"10140",
        country:"Thailand",
    };

    return view.render("login",{name,age,friends,address})
    }

    register({view}){
        return view.render("register")
    }
    
}    

module.exports = AuthController
