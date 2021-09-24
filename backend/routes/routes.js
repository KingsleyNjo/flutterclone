const express = require('express');
const router=express.Router()
const signUpDocument = require('../models/SignUpModels')



router.post('/signup',(request,response)=>{
    
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
    const result = signUpDocument.find(user => user.email == request.body.email);
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
