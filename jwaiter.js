function jwait(){
    if(jWait.isURL(object)){
        jWait.load(object,callback,params);
    }else{
        jWait.wait(object,callback,params,timeout);
    }
}

jWait.load = function(object,callback,params){
    var image = new Image();
    image.onload = function(){
        callback(params,image);
    }
    image.src = object;
}

jWait.wait = function(object,callback,params,timeout){
    if(!timeout) timeout=50;
    if(object in window){
    if(typeof callback === 'function') callback(params);
    }else{
      setTimeout(function(){
        scriptChecker(object,callback,params,timeout)
      },timeout);
    }
}

jWait.isURL = function(url){
    var patern = /^https?:\/\//i;
    if (patern.test(url)) return true;
    return false;
}

function wait(object,callback,params,timeout){
    new jWait(object,callback,params,timeout);
}