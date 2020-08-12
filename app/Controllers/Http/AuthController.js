'use strict';

const Database = use("Database") ; 

class AuthController {
    index({view}){
        return view.render("index") ;
    }
    async login({view, request, response}){
        const users = await Database.from("profiles").where({name: "john"})

        const name = "Panuwat"
        const age= 20;
        const friends = ["aaa","bbb","ccc","ddd"]
        const address = {
        postcode:"10140",
        country:"Thailand",
        };
    return view.render("login",{name,age,friends,address})
    }

    async loginUser({view, request, response}){
        const {email,password} = request.body;
        const data = await Database
            .select("*")
            .from('users')
            .where({username:email,password})

        if (data.length){
            return response.redirect('/index')
        }else{
            return response.redirect("/login")
        }
        
    }

    register({view}){
        return view.render("register") ;
    }

    async registerUser({request,response}){ // * ===async
        const {email,password,username}=request.body
        await Database.from("users").insert({email,password,username})
        //yield===await
        return response.redirect("/login")
    }
    
    index({view,request,response}){
        return view.render("index") ;
    }

    cars({view}){
        return view.render("index") ;
    }
    async cars({request,response}){
        //const {car_name,car_price,car_img,item} = request.body
        const data =await Database
        data
        .select("car_name")
        .from("cars")
        
        return response.redirect("/cars")
    }
    services({view}){
        return view.render("services") ;
    }

    cars_cardb({request,response}){
        //const data = await Database
        // .select("*")
        // .from('cars','cars_rent')
        //.where("cars_rent.car_id = cars.id")

        fetch()
        .then(function (response) {
        return response.json() 
        })
        .then(function (data) {
        console.log(data); 
        })
        return response.redirect("/cars")
    }

    add_car({view}){
        return view.render("add_car") ;
    }

    async add_car_data({request,response}){ 
        const {car_name,car_price,car_img,item}=request.body
        await Database.from("cars").insert({car_name,car_price,car_img,item})
        return response.redirect("/add_car")
    }

}    
    

    


module.exports = AuthController ;
