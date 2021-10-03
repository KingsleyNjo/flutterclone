const express = require('express');
const { getMaxListeners } = require('../models/SignUpModels');
const router=express.Router();
const signUpDocument = require('../models/SignUpModels');

mytable=[
    {
        fullName:"Kingsley Emeka",
        tradingname:"shoescollection stores",
        email:"kingsley@gmail.com",
        country:"Nigeria",
        words:"Buy from me",
        password:"kingsley"
    },
    {
        fullName:"White Money",
        tradingname:"Techbank",
        email:"white@gmail.com",
        country:"Nigeria",
        words:"Lets improve through technology",
        password:"white"
    },
    {
        fullName:"Adekunle Chinedu",
        tradingname:"bitcoin trading",
        email:"adekunle@gmail.com",
        country:"Nigeria",
        words:"Lets trade bitcoin",
        password:"adekunle"
    }
]

router.post('/signup',(request,response)=>{
    console.log(request.body);
    
    const signedUpUser = new signUpDocument({
        fullName:request.body.fullName,
        tradingname:request.body.tradingname,
        email:request.body.email,
        country:request.body.country,
        words:request.body.words,
        password:request.body.password
    })
    signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })

})

router.post('/login', (request,response) => {
    const result = mytable.find(user => user.email == request.body.email);
    if(result){
        if(result.password == request.body.password){
            response.status(200).send({
                message:"successful login!"
            })
        }else{
            response.status(200).send({
                message:"Password incorrect!"
            })
        }
    }else{
        response.status(200).send({
            message:"User not found!"
        })
    }
})




module.exports = router;
