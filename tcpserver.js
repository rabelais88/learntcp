var net = require("net");

net.createServer(function(socket){
  socket.on("data",function(data){
    console.log(data.toString("utf8"));
    socket.write(data);
  });
}).listen(52273,function(){
  var dispIP,dispPORT;
  dispIP = isNaN(process.env.IP) ?  "127.0.0.1": process.env.IP;
  dispPORT = isNaN(process.env.PORT) ?  "52273":process.env.PORT;
  console.log("TCP server running at " + dispIP + ":" + dispPORT );
});