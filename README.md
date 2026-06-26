# New-coder
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web App Pro</title>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1220;
    color:white;
}

/* ===== INTRO ===== */
#intro{
    position:fixed;
    width:100%;
    height:100%;
    background:radial-gradient(circle,#2563eb,#0b1220);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:999;
    animation:fadeOut 1s ease 3s forwards;
}

.logo{
    font-size:40px;
    font-weight:bold;
    animation:zoom 2s infinite alternate;
}

.barload{
    width:200px;
    height:5px;
    background:rgba(255,255,255,0.3);
    margin-top:20px;
    border-radius:10px;
    overflow:hidden;
}

.barload div{
    width:0%;
    height:100%;
    background:white;
    animation:load 3s forwards;
}

/* ===== TOP BAR ===== */
nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#1e293b;
    padding:10px;
    position:sticky;
    top:0;
}

.menu button{
    background:none;
    border:none;
    color:white;
    margin-right:10px;
    cursor:pointer;
    font-size:16px;
}

.menu button:hover{
    color:#38bdf8;
}

/* ===== PAGE ===== */
.page{
    display:none;
    padding:20px;
}

.active{
    display:block;
}

.card{
    background:rgba(255,255,255,0.08);
    padding:15px;
    margin-top:10px;
    border-radius:12px;
}

/* ===== ANIMATION ===== */
@keyframes load{
    from{width:0%}
    to{width:100%}
}

@keyframes zoom{
    from{transform:scale(1)}
    to{transform:scale(1.2)}
}

@keyframes fadeOut{
    to{
        opacity:0;
        visibility:hidden;
    }
}
</style>
</head>

<body>

<!-- ===== INTRO ===== -->
<div id="intro">
    <div class="logo">🔥 MY WEB APP</div>
    <div class="barload"><div></div></div>
</div>

<!-- ===== TOP NAV BAR ===== -->
<nav>
    <div><b>MyWeb</b></div>
    <div class="menu">
        <button onclick="show('home')">Home</button>
        <button onclick="show('chat')">Chat</button>
        <button onclick="show('music')">Music</button>
        <button onclick="show('game')">Game</button>
        <button onclick="show('profile')">Profile</button>
    </div>
</nav>

<!-- ===== PAGES ===== -->

<div id="home" class="page active">
    <h2>🏠 Home</h2>
    <div class="card">
        <p>Chào mừng bạn đến website!</p>
    </div>
</div>

<div id="chat" class="page">
    <h2>💬 Chat</h2>
    <div class="card">
        <input placeholder="Nhập tin nhắn">
        <button>Gửi</button>
    </div>
</div>

<div id="music" class="page">
    <h2>🎵 Music</h2>
    <div class="card">
        <input placeholder="Link nhạc mp3">
        <button>Phát</button>
    </div>
</div>

<div id="game" class="page">
    <h2>🎮 Game</h2>
    <div class="card">
        <p>Mini game sẽ thêm sau</p>
    </div>
</div>

<div id="profile" class="page">
    <h2>👤 Profile</h2>
    <div class="card">
        <p>Tên: User</p>
    </div>
</div>

<script>

/* ===== INTRO REMOVE ===== */
setTimeout(()=>{
    document.getElementById("intro").style.display="none";
},3000);

/* ===== PAGE SWITCH ===== */
function show(id){
    let pages = document.querySelectorAll(".page");
    pages.forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

</script>

</body>
</html>
