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
                    <td><a href="${item.html_url}">${item.name}</a></td>
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

    var knapp = document.getElementsByClassName("knapp");
    var hej = document.getElementsByClassName("dropdown");

    $(knapp).click(function(){
        $(hej).animate({
            height: 'toggle'
        });
    });

    var knappen = document.getElementsByClassName("btn_more");
    var heje = document.getElementsByClassName("show_more");

    $(knappen).click(function(){
        $(heje).animate({
            height: 'toggle'
        });
    });


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
            

            //function startaBildspel(){
              //  setInterval(rullaBilder, 1000);
            //}

            function validateForm() {
                var fornamn = document.forms["mainForm"]["fNamn"].value;
                var x = fornamn.length;
                if (fornamn == "") {
                    alert("Du måste fylla i ditt förnamn");
                    return false;
            }else if (x < 3){
                alert("ditt namn måste innehålla minst tre bokstäver");
                return false;
            }
        }

            function validateENamn(){
                var efternamn = document.forms["mainForm"]["eNamn"].value;
                var minstTre = efternamn.length;
                if(efternamn == ""){
                    alert("Du måste fylla i ett efternamn");
                    return false;
                } else if(minstTre < 3){
                    alert("ditt efternamn måste innehålla minst tre bokstäver");
                return false;
                }
            }

            function validateEmail(){
                var mail = document.forms["mainForm"]["eMail"].value;
                var vali = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(mail == ""){
                    alert("Fyll i en epost");
                    return false;
                }else if(vali.test(mail) == false){
                    alert("Du måste fylla i en giltig emailadress");
                    return false;
                }

            }

            function validateNumber(){
                var number = document.forms["mainForm"]["tNummer"].value;
                var vaild = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if(number == ""){
                    alert("Skriv in ett telefonnummer");
                }else if(vaild.test(number)== false){
                    alert("inte ett giltigt telfonnummer");
                }

            }

            function validateText(){
                var text = document.forms["mainForm"]["subject"].value;
                if(text == ""){
                    alert("Skriv dina synpunkter");
                    return false;
                }
            }

            function validateAll(){
                if(validateForm() == false){
                    return false;
                }
                else if(validateENamn() == false){
                    return false;
                }
                else if(validateEmail() == false){
                    return false;
                }
                else if(validateNumber() == false){
                    return false;
                }
                else if(validateText() == false){
                    return false;
                }
                
            }
