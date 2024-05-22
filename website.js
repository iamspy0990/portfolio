let one = document.querySelector('.one')


one.addEventListener('click', run)

let aboutMe = document.querySelector('.about')
function run() {

    aboutMe.style.boxShadow = '0px 0px 16px 2px rgb(255, , 0)';
    aboutMe.style.transition ='all 1s ease'
    setTimeout(removeShadow, 1000);
    window.location.href = '#about'
}

function removeShadow (){
    aboutMe.style.boxShadow = 'none';
    aboutMe.style.transition ='all 1s ease'
}



let two = document.querySelector('.two')


two.addEventListener('click', run2)

let animate = document.querySelector('.animate')
function run2() {
    
    animate.style.boxShadow = '0px 0px 16px 2px rgb(255, 0, 0)';
    animate.style.transition ='all 1s ease'
    setTimeout(removeShadow2, 1000);
    window.location.href = '#ani'
}

function removeShadow2 (){
    animate.style.boxShadow = 'none';
    animate.style.transition ='all 1s ease'
}




let three = document.querySelector('.three')


three.addEventListener('click', run3)

let social = document.querySelector('.socials')
function run3() {
    
    social.style.boxShadow = '0px 0px 16px 2px rgb(255, 0, 0)';
    social.style.transition ='all 1s ease'
    setTimeout(removeShadow3, 1000);
    window.location.href = '#socials'
}

function removeShadow3 (){
    social.style.boxShadow = 'none';
    social.style.transition ='all 1s ease'
}




document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["Hey, Im Spy"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finssished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
        if(i >= 8){
            document.querySelector("#ooo").innerHTML = text.substring(0, 8) + '<span style="color:rgb(200, 40, 30); text-shadow:0px 0px 12px rgb(255, 0, 0);">'+ text.substring(8, i+1) +'</span>' +'<span aria-hidden="true"></span>';
        }else{
            document.querySelector("#ooo").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        }
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
