
var start = true;
    var pausKnapp = document.getElementById("paus");
    var index = 0;
    var interval = setInterval(rullaBilder, 2000);

    var bilder = ["img/bild1.jpg",
                  "img/bild2.jpg",
                  "img/bild3.jpg"
                 ];

            function rullaBilder(){
                var img = document.getElementById("bildspel1");
                pausKnapp.innerHTML = 'Stop';
                start = true;
                interval;
                img.setAttribute("src", bilder[index]);
                index++;
                if(index === bilder.length){
                    index = 0;
                }
            }
            function pausaBildspel(){
                pausKnapp.innerHTML = '';
                start = false;
                clearInterval(interval);
            }
            
            pausKnapp.onclick = 
            function(){
                if(start){
                    pausaBildspel()
                    start = false;
                    pausKnapp.innerHTML
                    }
                   
}