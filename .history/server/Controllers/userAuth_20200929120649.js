module.exports={
    signupGet:(req,res)=>{
    res.json({ message: "Working of get route in signup" });
    }
}
module.exports={
    signupPost=(req,res)=>{
        res.json({ message: "Working of post route in signup" });
    }
}
module.exports={
    loginGet=(req,res)=>{
        res.json({ message: "Working of get route in login" });
        
    }
}
module.exports={
    loginPost=(req,res)=>{
       res.json({ message: "Working of post route in login" });
        
    }
}