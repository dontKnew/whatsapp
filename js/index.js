window.onload  = function(){
    document.querySelector('.loading').style.display = "none";
    document.querySelector('.whatsapp').style.display = "block";
}

var users = [
     {id:7920723, name:"AJ Anant", text:"ok By Dude...", time:"7:02",newMsg:1},
     {id:2200299, name:"Rahul Kumar", text:"I appreciated:)", time:"18:56",newMsg:2},
     {id:12272000, name:"Karishma Kumari", text:"lets talk something bro ?", time:"13:02",newMsg:5},
     {id:8489802, name:"Lokesh Kumar", text:"help please bro...", time:"15:00",newMsg:5},
     {id:12272000, name:"Karishma Kumari", text:"lets talk something bro ?", time:"13:02", newMsg:5}, 
     {id:284527, name:"Katrina Kaif", text:"I love you :(", time:"7:02",newMsg:12}, 
     {id:858980, name:"Mark Zukerburg", text:"help please bro...", time:"15:00",newMsg:5},
     {id:4188281, name:"Strenger", text:"ohh yaar sun na...", time:"7:02",newMsg:10},
     {id:928723, name:"Rupesh", text:"ok By Dude...", time:"7:02",newMsg:1},
     {id:1222000, name:"Karishma Kumari", text:"lets talk something bro ?", time:"13:02", newMsg:5}, 
     {id:284527, name:"Katrina Kaif", text:"I love you :(", time:"7:02",newMsg:12}, 
     {id:1712110, name:"Salman Khan", text:"Hey Bro ! how do you...", time:"9:22",newMsg:3}];
var wallpaperTheme = ["https://dl.dropbox.com/s/748lrepgl77hlfm/asmani.jpeg","https://dl.dropbox.com/s/8td2sl0fmzlqco0/begani.jpeg","https://dl.dropbox.com/s/41cjs3au49pknx3/brown.jpeg","https://dl.dropbox.com/s/l0vzlor1hewn00l/green.jpeg", "https://dl.dropbox.com/s/qoa0pulm1eywiy4/light%20yellow.jpeg","https://dl.dropbox.com/s/nyjckrrtr69hvkm/red.jpeg","https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg","https://dl.dropbox.com/s/s69y25xkgo2zk4i/theme-blue.jpeg"]//robotProfile:"https://dl.dropbox.com/s/9djixpxufl988op/Robot.jpg"     

//response Message 
var abc=["Laal dupatta udd gya re hawa ke jokhe se,_Mujhko Papa ne dekh liya Mara dande se😅","Bantai tera to banta hi nhi hai,_tujhpe kuch bhi jamta hi nhi hai😂","Mai har test pass krke dikhaunga chahe ye mera blood test hi kyon na ho😂","हाय नी तेरी लाल चुनरिया_पहन के लगदी तू कमाल_ओ तेरा क्या कहना_ओ तेरा क्या कहना😘","Gaadi wala aaya,_Ghar se kachra nikal!😂","Bol Bhidu kya kaam hai?","Swagat nhi kroge hamara?","Mere baare mein mat socho,_dil mein aata hoon samajh mein nhi😉","Aeyyyihhh!!! kyon thak rha hai?","Iss baar angrezi mein mujhko Barack Obama bhi fail nhi kr sakta😅","Mai to nanha sa pyaara sa bacha hoon🥺","Acha hai Bahut Acha hai!","Don't angry me!","Yeh Babu rao ka style hai!","Aree baba wrong no. hai to uthati kyon hai","Naam to kamal che...._par surname bawal che😏","Ye haath hai ya hathoda,_kido ki basti mein aa gya makoda😂","tension lene ka nahi_dene ka re😅","chalti kya nau se egyarahh😉","Mauka hai, dastoor hai ..._zakhaas raja,_zakhaas rani aur raazi ... kyun na laga de_Bollywood ki baazi","Tu Munna Bhai hoga lekin main Circuit nahi hoon ..._tu Batman hoga lekin main Birdman nahi hoon ..._tu hero hoga lekin ab main bhi hero hoon😂","Tu ladki ke peeche bhagega,_ladki paise ke peeche bhagegi ..._tu paise ke peeche bhagega,_ladki mere peeche bhagegi🤷","Oh ji jhappiyan tak te theek hai ..._par pappiyan bhi marte rhende hai mainu💁","Ye firauti ke paise hain ya_maiyyat ka chanda😂","Kaun bhauk rha hai ye badtameez😏","Kauwa kitna bhi washing machine mein nha le bagula nhi banta😂","Bhabhi hogi teri aur_shaadi hogi meri😉","Paan me pudina dekha,_naak ka nagina dekha,_chikni chameli dekhi,_chikna kamina dekha,_chaand cheater hoke cheat kiya toh,_Saare taare bole gilli gilli akha.😂","Ladki kamaal re akhiyon se goli maare😉","rehen de bette😏","rehen de chotte😏","Daya kuch to gadbad hai🤔","Daya Darwaja tod🤨","Chaand taare tod laun,_saari duniya par main chaun,_bas itna sa khwaab hai😅","Tune maari entry yaar,_dil mein baji ghanti yaar,_Tann Tann Tann😂","Gulaabi aankhein jo teri dekhi,_sharaabi ye dil ho gya😍","Tera Pyaar pyaar pyaar hukah baar🤐","I Love You❤️"]
var hi=["hello 😘😘🥰","hello 😅😅","hello 😆🤣😂","Hello, Tell me something about you :)","Hello Darling♥️","Hi Beta😂","Hello Bete🤣"];
var no=["no problem","Koi gal ni oye!","koi nhi","Thik hai", "Thik hai"];
var what=["Nothing🤣","Nothing","Kuch nhi😂","Kuch nhi oye!","Kya 'what' ek baar mein sunne ki aadat daal le😏"];
var blank=["ek bar bolne par samj nhi ata kia ? ? ", "i said! do not send blank message", "Khuch likh le yaar", "write something yaar like : I love you 😘😅", "please do not blank 😏"];
var welcome = ["Nice to meet you dear :)","Welcome ! <br> mujhe pata tha apko meri yaad yaha khinch layegi 😆😅", "hey Cute dude 🥰", "ayein apka swagat hai in my heart ;)"];
var intro = ["I am Robot 2.0", "I am Robot 2.0 created by <strong> <span style='color:red'>Dont Knew</span></strong>.", "I am technical Robot", "My owner name is  🥰 <strong> <span style='color:red'>Dont Knew</span></strong>."];

users.forEach(function(obj){
    var id = obj.id;
    var name = obj.name;
    var text = obj.text;
    var newMsg = obj.newMsg;
    var time = obj.time;
    document.querySelector(".w-chat").innerHTML += "<div onclick='arrayId(this)' data-chat-id = "+id+"> <div> <img src='https://api.sololearn.com/Uploads/Avatars/"+id+".jpg' alt="+name+"> </div> <div class='chat-fr'> <span> "+name+ " </span> <span>" +text+ " </span> </div> <div class='chat-date'> <span>" +time+ "</span> <span>" +newMsg+ "</span> </div></div>";
})

// Status stories random user from chat
var status_users = [];
for (var i=0; i < 10; i++){
    var ran_num = Math.floor(Math.random()*users.length);
    if(!status_users.includes(ran_num)){
        status_users.push(ran_num);
    }
}
console.log(status_users);
for(var j = 0; j<status_users.length; j++){
    // console.log(users[j].name);
    document.querySelector('.w-stories').innerHTML +="<div class='stories'><div><img src='https://api.sololearn.com/Uploads/Avatars/"+users[status_users[j]].id+".jpg' alt="+users[status_users[j]].name+"><i class='fas fa-plus-circle'></i></div><div class='chat-fr'><span> " + users[status_users[j]].name + " </span><span>" + users[status_users[j]].time + "</span></div></div>"; 
}

// call tab random user from users array
var call_users = [];
for (let i=0; i < 5; i++){  
    let ran_num = Math.floor(Math.random()*users.length);
    if(!call_users.includes(ran_num)){
        call_users.push(ran_num);
    }
}
for(let j = 0; j<call_users.length; j++){
    document.querySelector('.w-calls').innerHTML +="<div><div> <img src='https://api.sololearn.com/Uploads/Avatars/"+users[call_users[j]].id+".jpg' alt="+users[call_users[j]].name+"></div><div class='chat-fr'><span>" + users[call_users[j]].name + "</span><span> <i class='fas fa-long-arrow-alt-up'></i> <span> (6) Today, " + users[call_users[j]].time + " </span></span></div><div class='call-icon'><i class='fas fa-phone'></i></div></div>"; 
    // console.log(users[j].name);
}

var home_chat = document.querySelectorAll(".w-chat")[0];
var stories = document.querySelectorAll(".w-stories")[0];
var calls = document.querySelectorAll(".w-calls")[0];
var plus_icon = document.querySelectorAll(".fa-plus-circle")[0];
var homeChat_icon = document.querySelectorAll(".fixed-new-chat > img")[0];
var stories_icon = document.querySelectorAll(".fixed-status-icon1")[0];
var call_icon = document.querySelectorAll(".fixed-status-icon2")[0];
function ShowStatus(){
        home_chat.style.marginLeft = "-100%";
        calls.style.marginLeft = "-100%";
        stories.style.marginLeft = "1px";
        plus_icon.style.left = "42px";
        stories_icon.style.display = "block";
        homeChat_icon.style.right = "-100%";
        call_icon.style.visibility = "hidden";
        console.log("ok");
    }
function ShowCalls(){
        stories_icon.style.display = "none";
        home_chat.style.marginLeft = "-100%";
        stories.style.marginLeft = "-100%";
        calls.style.marginLeft = "1px";
        plus_icon.style.left = "-100%";
        stories_icon.style.right = "-100%";    
        homeChat_icon.style.right = "-100%";
        call_icon.style.visibility = "visible";
    }
function ShowHomechat(){
        home_chat.style.marginLeft = "1px";
        calls.style.marginLeft = "-100%";
        stories.style.marginLeft = "-100%";
        plus_icon.style.left = "-100%";
        homeChat_icon.style.right = "15px";
        stories_icon.style.right = "-100%";
        call_icon.style.visibility = "hidden";
        stories_icon.style.display = "none";
}
var homeChat = document.querySelector(".whole-body");
var chatPage = document.querySelector(".chat-page");
var textHelp = document.querySelector('.msg-left > span');
var wallpaperBody = document.body;
var chatBtmWallpaper = document.querySelector(".w-chat-body > .chat-bottom");
var wallpaperTheme1 = document.querySelector(".wallpaper-theme");
var chatPage = document.querySelector(".chat-page");
var confirmalert = document.querySelector(".confirm-alert");
function arrayId(id){
    //https://api.sololearn.com/Uploads/Avatars/"+id+".jpg
    var userUrl = id.getAttribute("data-chat-id");
    // var userId = userUrl.match(/(\d+)/i)[0];
    let userindex  = users.findIndex(x=> x.id==userUrl);
    homeChat.style.display = "none";
    chatPage.style.display = "block";
    let imgIndex = Math.floor(Math.random()*wallpaperTheme.length);
    wallpaperBody.style.backgroundImage = "url('"+wallpaperTheme[imgIndex]+"')";
    chatBtmWallpaper.style.backgroundImage  = "url('"+wallpaperTheme[imgIndex]+"')";
    messageHeader.innerHTML = '<div class="msg-left"><span> <strong style="color:green;">'+users[userindex].name+"</strong> "+rand(welcome)+ ' <span>'+time+'</span> </span></div>';
    // textHelp.textContent;
     messageHeader.innerHTML += '<div class="msg-left"><span style="color:red;font-weight:bolder"> Type -  Help 🙋 <span>'+time+'</span> </span></div>';
    
}
function backHomechat(){
    homeChat.style.display = "block";
    chatPage.style.display = "none";
    wallpaperBody.style.backgroundColor  = "#fff";
    wallpaperBody.style.backgroundImage  = "none";
}

// console.log("Value"+users[0].id)
// W-Chat Script
var micIcon = document.querySelector(".chat-bottom > div > .fa-microphone");
var sendIcon = document.querySelector(".chat-bottom > div > .fa-paper-plane");
var textArea = document.querySelector(".chat-bottom > div > textarea");
var cameraIcon = document.querySelector(".type-inner-icon > div > .fa-camera");
function changeIcon(){
        if(!textArea.value == ""){
        micIcon.style.display = "none";
        sendIcon.style.display = "block";
        sendIcon.style.opacity = "1";
        cameraIcon.style.display = "none";
        }else  {
            micIcon.style.display = "block";
            sendIcon.style.display = "none";
            sendIcon.style.opacity = "0";
            cameraIcon.style.display = "inline-block";
        
        }
}

// chat script...
function rand(arrayName){
     var num = Math.floor(Math.random()*arrayName.length);
     console.log(num);
     var msg = arrayName[num];
    //  console.log(msg);
     return msg;
}
var messageHeader = document.querySelector(".message-header");
function messageWindowLoad(){
    document.querySelector(".onlineText").innerHTML = "online"
}
setTimeout(messageWindowLoad, 2000);
var today = new Date();
var time = today.getHours()+":"+today.getMinutes();
function responseMessage(){
    messageHeader.innerHTML += '<div class="msg-right"><span> ' + textArea.value + ' <span>'+time+'</span> </span></div>';
    document.querySelector(".onlineText").innerHTML = "Typing...";
    setTimeout(function(){
    document.querySelector(".onlineText").innerHTML = "online";
    var userMsg = textArea.value.toLowerCase(); 
    if(userMsg == "hi" || userMsg == "hello" || userMsg == "hy" || userMsg == "hyy" || userMsg == "hii" || userMsg == "helo" || userMsg == "hi bro"){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(hi) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "kiya" || userMsg.match("hua")|| userMsg == "what" ){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(what) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "no" || userMsg == "nahi" || userMsg == "never" || userMsg == "not" || userMsg == "ok" ){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(no) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "who are you" || userMsg == "name" || userMsg == "your name" || userMsg == "nam" || userMsg == "whats your name" || userMsg.match("who") || userMsg.match("name")){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(intro) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "help" || userMsg == "help me" || userMsg == "help me dear" || userMsg == "help bro"){
         messageHeader.innerHTML += '<div class="msg-left"><span><table><tr><th style="font-weight:bolder;">Type text</th></tr><tr><td>hello,hi,helo,hi</td></tr><tr><td>kiya, what </td></tr><tr><td>nahi, never, not, ok</td></tr><tr><td>nam, whats your name, who are you, name</td></tr><tr><td>blank msg send, full stop send-><strong>.</storng> </td></tr></table> <br> <strong>Note : I will improve this commanc text...</strong><span>'+time+'</span> </span></div>';
    }else {
        messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(abc)  + ' <span>'+time+'</span> </span></div>';   
     }
     // blank textarea after send message
     textArea.value = "";
     },2000)
}
function nonDevelopError(text){
    messageHeader.innerHTML += '<div class="msg-left"><span>  <strong style="color:red"> Error:</strong> '+text+' <span>'+time+'</span> </span></div>';
}
// Wallpaper Change Theme
function chatHome(){
    wallpaperTheme1.style.marginTop = "-300%";
    confirmalert.style.marginLeft = "-100%";
    setTimeout(function(){wallpaperTheme1.style.display = "none"},100);
    chatPage.style.display = "block";
}
function wallpaperTheme2(){
    wallpaperTheme1.style.marginTop = "0";chatPage.style.display = "none";
    setTimeout(function(){wallpaperTheme1.style.display = "block"},100);
}
var themeView = document.querySelector(".theme-view");
function themeBright(){
    themeView.style.display = "block"
    setTimeout(function(){themeView.style.marginTop = "0";},10);
    confirmalert.style.marginLeft = "-100%";
} 
function backtoWallpaperTheme(){
    themeView.style.marginTop = "-300%";
    setTimeout(function(){themeView.style.display = "none"},1000);
    confirmalert.style.marginLeft = "-100%";
} 
// print wallpaper theme image {}
var imageParent = document.querySelector('.theme-view > div:nth-child(2)');
for(var theme = 0; theme < wallpaperTheme.length; theme++){
    imageParent.innerHTML += '<div> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> </div>';
}

function wallpaperChange(srcUrl){
    wallpaperBody.style.backgroundImage = "url('"+srcUrl.src+"')";
    chatBtmWallpaper.style.backgroundImage = "url('"+srcUrl.src+"')";
    confirmalert.style.marginLeft = "0";
    backtoWallpaperTheme();
    chatHome();
}

function DefaultWallpaper(){
    wallpaperBody.style.backgroundImage = "url('https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg')";
    chatBtmWallpaper.style.backgroundImage = "url('https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg')";
    console.log("defaul");
}
function RemoveWallpaper(){
    wallpaperBody.style.backgroundImage = "none";
    chatBtmWallpaper.style.backgroundImage = "none";
    wallpaperBody.style.backgroundColor = "rgb(113, 214, 113)";
    chatBtmWallpaper.style.backgroundColor = "rgb(113, 214, 113)";
    console.log("removed");
}
var colorValue = document.querySelector(".wallpaper-theme > div > div  > input[type='color']");
function SolidColor(){
    wallpaperBody.style.backgroundImage = "none";
    chatBtmWallpaper.style.backgroundImage = "none";
    wallpaperBody.style.backgroundColor = colorValue.value;
    chatBtmWallpaper.style.backgroundColor = colorValue.value;
    console.log(colorValue.value);
}
function confirmAlert(){
 confirmalert.style.marginLeft = 0;
 document.querySelector(".confirm-alert").style.backgroundColor = colorValue.value;
}

function errorMsg(textError){
    confirmalert.style.marginLeft = 0;
    confirmalert.style.opacity = 1;

    setTimeout(function(){confirmalert.style.opacity = "0";},3000);
    confirmalert.innerHTML = textError;
}