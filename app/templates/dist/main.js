define("modules/hello",[],function(){return function(e){console.log(e)}}),requirejs(["modules/hello"],function(e){e("Hello world")}),define("main",function(){});