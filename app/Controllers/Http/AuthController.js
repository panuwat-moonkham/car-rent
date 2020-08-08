'use strict'

const Database = use("Database");

class AuthController {
    async login({view, request, response}){
        const users = await Database.from("profiles").where({name: "john"})
        // const users = await Database.select("name","age")
        // .form("users")
        // .where({age:"20"})// เอาอายุ=20
        // .whereNot({name: "john"})//ไม่เอาอายุ=20
        // .whereBetween('age',[18,32]) //เอาอะยุระหว่าง 18-32
        // //select("*") all       ("name","!=","john")

        const name = "Panuwat"
        const age= 20;
        const friends = ["aaa","bbb","ccc","ddd"]
        const address = {
        postcode:"10140",
        country:"Thailand",
        };
    return view.render("login",{name,age,friends,address})
    }

    loginUser({view, request, response}){
        const {username,password} = request.body;
        //?{_csrf:"",username,password}
        //console.log(profile);
        return response.redirect("/login")
        
    }

    register({view}){
        return view.render("register")
    }

    async registerUser({request,response}){ // * ===async
        const {email,password,username}=request.body
        await Database.from("users").insert({email,password,username})
        //yield===await
        return response.redirect("/login")
    }
    
}    

module.exports = AuthController
