(function(){
  var a= document.getElementById('action'), xhr;
  if(!a) return;
  
  function state(){
    if(xhr.readyState == 4 && xhr.status == 200){
      alert('do')
    }
  };
  
  function check(){
    if(!window.XMLHttpRequest) return;
    xhr= new XMLHttpRequest();
    
    xhr.onreadystatechange= state;
    xhr.open('GET','/act.html',true);
    xhr.send(null)
  };
  
  check()
})();