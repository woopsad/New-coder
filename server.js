const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// database tạm (RAM)
let users = [];

// ===== REGISTER =====
app.post("/register", (req,res)=>{
    const {username,password} = req.body;

    if(!username || !password){
        return res.json({ok:false,msg:"Thiếu dữ liệu"});
    }

    let exist = users.find(u=>u.username === username);

    if(exist){
        return res.json({ok:false,msg:"Tài khoản đã tồn tại"});
    }

    users.push({username,password});

    res.json({ok:true,msg:"Đăng ký thành công"});
});

// ===== LOGIN =====
app.post("/login",(req,res)=>{
    const {username,password} = req.body;

    let user = users.find(u=>u.username===username && u.password===password);

    if(user){
        res.json({ok:true,msg:"Đăng nhập thành công"});
    }else{
        res.json({ok:false,msg:"Sai tài khoản hoặc mật khẩu"});
    }
});

app.listen(3000,()=>{
    console.log("Server chạy http://localhost:3000");
});