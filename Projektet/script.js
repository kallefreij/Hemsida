/*$(document).ready(()=>{
    var items = [];

    function loadJSON(){
        $.getJSON(
            'https://api.github.com/search/repositories?q=javascript+is:trending&sort=stars&order=desc',
            (data) => {
                items = data.items.map((item) =>{
                    return{
                        ...item,
                        watchers: parseFloat(item.watchers)
                    };
                });
                listItems();
            }
        );
    }
    
    function listItems(){
        items.forEach((item) => {
            var tabelRad = $(
                `<tr class = "item-row">
                    <td>${item.name}</td>
                    <td>${item.watchers}</td>
                    <td>${item.full_name}</td>
                </tr>`
            );
            $('#item_list').append(tabelRad);
        });
    }

    loadJSON();
});*/

$(document).ready(() => {
    var items = [],
        object = {};

    function listItems() {

      
        var i = 0;
        items.forEach((item) => {
            if(i === 5){
                return;
            }
            
                
            
            var tableRow = $(
                `<tr class="item-row">
                    <td>${item.name}</td>
                    <td>${item.full_name}</td>
                    <td>${item.watchers}</td>
                </tr>`
            );
            $('#itemList').append(tableRow);
                i++;
         });
        
    }
    

    function loadJSON() {
        $.getJSON(
      'https://api.github.com/search/repositories?q=language:javascript&sort=watchers&order=desc',
      (data) => {
                console.log(data);
                items = data.items.map((item) => {
                    return {
                        ...item,
                    };
                });
                listItems();
            }
        );
    }
    loadJSON();
});

       

     
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
                pausKnapp.innerHTML = 'Paus';
                start = true;
                interval;
                img.setAttribute("src", bilder[index]);
                index++;
                if(index === bilder.length){
                    index = 0;
                }
            }
            function pausaBildspel(){
                pausKnapp.innerHTML = 'Start';
                start = false;
                clearInterval(interval);
            }
            
            pausKnapp.onclick = 
            function(){
                if(start){
                    pausaBildspel()
                    start = false;
                    }
                   
                }
            

            //function startaBildspel(){
              //  setInterval(rullaBilder, 1000);
            //}

            function validateForm() {
                var fornamn = document.forms["mainForm"]["fNamn"].value;
                var efternamn = document.forms["mainForm"]["eNamn"].value;
                if (fornamn == "") {
                    alert("Du måste fylla i ditt förnamn");
                    return false;
                } else if(efternamn == ""){
                    alert("Du måste fylla i ett efternamn");
                    return false;
                }
            }