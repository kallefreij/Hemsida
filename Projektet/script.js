

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
