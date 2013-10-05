myIPv4 = (function(){
  var os = require('os');
  var interfaces = os.networkInterfaces();
  for(var key in interfaces){
    var addresses = interfaces[key];
    for(var i = 0; i < addresses.length; i++){
      address = addresses[i];
      if(!address.internal && address.family === 'IPv4'){
        return address.address;
      };
    };
  };
  return 'localhost'
})();

if(!module.parent){
  console.log(myIPv4);
}else{
  module.exports = myIPv4;
};