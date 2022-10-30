/* Add your JavaScript to this file */
window.onload = function () {

    const subscribe = document.querySelectorAll('.btn');
    
   subscribe[1].addEventListener('click', function(event) {
       event.preventDefault();
       var  container = document.getElementsByClassName("message");
       if (container[0].innerHTML!=""){
           container[0].removeChild(container[0].lastElementChild);  
       }
       var email= document.getElementById("email").value;
       var p = document.createElement("p") ;
       var message="";
       if(email!="")
       {
             message = document.createTextNode('Thank You '.concat(email));
  
        }else
        {
         message = document.createTextNode('Please enter a valid email address');
        }
        p.appendChild(message)
       container[0].appendChild(p);
  })

  }
