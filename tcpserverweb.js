var net = require("net");

net.createServer(function(socket){
  socket.on("data", function (data){
    console.log(data.toString("utf8"));
    res = [
      "HTTP/1.1 200 OK\n",
      "Server: custom TCPIP server\n",
      "Content-Type:text/html\n",
      "Content-Length:21\n",
      "\n",
      "<h1>Hello World</h1>"
    ];
    res.foreach(function(el){
      socket.write(el);
    });
    
    socket.end();
  });
}).listen(52283,function(){
  console.log("TCP Server running at 127.0.0.1:52273");
});