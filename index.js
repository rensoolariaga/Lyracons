
   function itemDisplay() {

    document.getElementsByClassName('itemNav')[0].style.display = 'none';
    document.getElementsByClassName('itemNav')[2].style.display = 'none';
    document.getElementsByClassName('itemNav')[3].style.display = 'none';

   }
   function itemDisplay2() {

    document.getElementsByClassName('itemNav2')[0].style.display = 'none';
    document.getElementsByClassName('itemNav2')[2].style.display = 'none';
    document.getElementsByClassName('itemNav2')[3].style.display = 'none';

   }
   function navDisplay(){
    var nav = document.getElementById('artOrange').style.backgroundColor = 'green';
   }
   function holaMundo(){
    var nav = document.getElementById('artOrange')
    nav.innerHTML = "<p>Hola Mundo!</p>"
   }