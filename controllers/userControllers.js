const  User = require("../models/user")
const bcryptjs = require("bcryptjs")
const sendEmail = require("./sendEmail")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


const userControllers = {
    signUpUsers : async(req, res) =>{
        const { firstName, lastName , email , password , from, photo, country } = req.body.userData
        try{
            const userExist = await User.findOne({ email })
            console.log(userExist)
            const verification = false
            const uniqueString = crypto.randomBytes(15).toString('hex')
            if(userExist){
                if(userExist.from.indexOf(from) !== -1){
                    res.json({ 
                        success: false,
                        from: from,
                        message: "You have already made your signup in this way please perform SignIn"
                    })
                } else {
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    userExist.imageUser = imageUser
                    userExist.verification = true
                    userExist.from.push(from)
                    userExist.password.push(passwordHasheada)
                        await userExist.save()
                        res.json({
                        success: true,
                        from: from,
                        message: "Add" + from + "to your media to make signIn"
                    })
                }
            } else {//si el usuario no
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    console.log(passwordHasheada)
                    const newUser = await new User ({
                        firstName,
                        lastName,
                        email,                       
                        password: [passwordHasheada],
                        photo,
                        country,
                        from: [from],
                        uniqueString,
                        verification: false,                      
                                                
                        
                    })
                    console.log(newUser)
                    if(from !== "form-signup" ) {
                    newUser.verification = true
                        await newUser.save()
                        res.json({
                            success: true,
                            from: from,
                            message: "congratulations your user has been created with " + from
                        })

                    } else{
                        await newUser.save()
                        await sendEmail(email,uniqueString)
                        res.json({
                            success: true,
                            from: from,
                            message: "we send you an email to validate it, please check your casiila to complete the signUp"
                        })
                    }
                }
            } catch(error){
                res.json({
                    console: console.log(error),
                    success: false,
                    message: "something has gone wrong, try it in a few minutes"
                })
            }
        },



    signInUser : async (req, res) =>{
        const {email, password, from} = req.body.logedUser
        try{
            const userExist = await User.findOne({ email })
            // const indexPass = userExist.from.indexOf(from)
            if(!userExist){
                res.json({
                    success: false, 
                    message:"Your user has not been registered,please signup"})
            } else{
                
                if(from !== "form-signup"){
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password,pass))
                    if (passwordMatch.length > 0){
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            photo: userExist.photo,
                            country: userExist.country,
                            from: from,
                        }
                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60 * 60 * 24})
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: {token, userData},
                            message: "welcome back " + userData.firstName,
                        })
                    } else{
                        res.json({
                            success: false,
                            from: from,
                            message: "you haven't registered with " + from + " if you want to enter you must make the signUp " + from
                        })
                    }
                } else {
                     let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password,pass))
                    if (passwordMatch.length > 0){
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            photo: userExist.photo,
                            country: userExist.country,
                            from: from,
                        }
                        const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                        await userExist.save()
                        res.json ({
                            success : true,
                            from: from,
                            response: {token, userData},
                            message: "welcome " + userData.firstName + userData.lastName
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "Verify your email or password!!!!",
                        })
                    }
                }
            }
        }
catch (error){
        res.json({
            console: console.log(error),
            success: false,
            message: "something has gone wrong in a few minutes"
        })
    }
},
verifyMail: async (req, res) => {
    const {string} = req.params
    const user = await User.findOne({uniqueString: string})
    //console.log(user)
    if (user) {
        user.verification = true
        await user.save()
        res.redirect("http://localhost:3000/signIn")
    }
    else {res.json({
        success: false,
        message: `email has not account yet!`})
    }
},
 signOut: async (req, res) => {
        console.log('signOut')
        console.log(req.body)
        const email = req.body.mail
        const user = await User.findOne({email})
        await user.save()
        res.json({
            success: true,
            message: email+' sign out!'})
    },
verifyToken: (req, res) => {
        const user = {
          id: req.user.id,
          email: req.user.email,
          firstName: req.user.firstName,
          photo: req.user.photo,
    
          from: "token",
        };
        //console.log(req.user)
        if (!req.err) {
          res.json({
            success: true,
            response: { user },
            message: "Hi! Welcome back " + req.user.firstName,
          });
        } else {
          res.json({
            success: false,
            message: "sign in please!",
          });
        }
      },
}
module.exports = userControllers