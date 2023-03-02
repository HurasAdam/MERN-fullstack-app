
//login

const loginUser=(req,res)=>{

res.json('zalogowano')


}

//register

const signUpUser= (req,res)=>{

res.json('zarejestrowano')

}

module.exports={


    loginUser,signUpUser
}