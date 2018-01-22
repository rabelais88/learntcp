var net = require("net");

if(process.argv[2]){
var socket = net.connect(52273, process.argv[2], function(){
  console.log("try connecting to..." + process.argv[2]);
  console.log("ready to chat. enter your message below. CTRL+C to abort");
});
}else{
  console.log("please enter correct IP address(PORT:52273)\nnode tcpclient.js [ip]");
  process.exit();
}

socket.on("data",function(data){
  console.log(data.toString());
});

process.stdin.resume();
process.stdin.on("data",function(chunk){
  socket.write("ECHO: " + chunk);
});