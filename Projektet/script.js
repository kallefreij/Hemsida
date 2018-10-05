

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


       

     
  

            

            function validateForm() {
                var fornamn = document.forms["mainForm"]["fNamn"].value;
                var x = fornamn.length;
                if (fornamn == "") {
                    $('#felNamn').removeClass('hidden');
                    $('#okNamn').addClass('hidden');
                    return false;
            }else if (x < 3){
                $('#okNamn').addClass('hidden');
                $('#felNamn').removeClass('hidden');
                return false;
            }else{
                $('#felNamn').addClass('hidden');
                $('#okNamn').removeClass('hidden');
                return false;
            }
        }

            function validateENamn(){
                var efternamn = document.forms["mainForm"]["eNamn"].value;
                var minstTre = efternamn.length;
                if(efternamn == ""){
                    $('#felENamn').removeClass('hidden');
                    $('#okENamn').addClass('hidden');
                    return false;
                } else if(minstTre < 3){
                    $('#felENamn').removeClass('hidden');
                    $('#okENamn').addClass('hidden');
                return false;
                }
                else{
                    $('#felENamn').addClass('hidden');
                    $('#okENamn').removeClass('hidden');
                }
            }

            function validateEmail(){
                var mail = document.forms["mainForm"]["eMail"].value;
                var vali = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(mail == ""){
                    $('#felEmail').removeClass('hidden');
                    $('#okEmail').addClass('hidden');
                    
                    return false;
                }else if(vali.test(mail) == false){
                    $('#felEmail').removeClass('hidden');
                    $('#okEmail').addClass('hidden');
                    return false;
                }else{
                    $('#felEmail').addClass('hidden');
                    $('#okEmail').removeClass('hidden');
                }

            }

            function validateNumber(){
                var number = document.forms["mainForm"]["tNummer"].value;
                var vaild = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if(number == ""){
                    $('#felTele').removeClass('hidden');
                    $('#okTele').addClass('hidden');
                }else if(vaild.test(number)== false){
                    $('#felTele').removeClass('hidden');
                    $('#okTele').addClass('hidden');
                }else{
                    $('#felTele').addClass('hidden');
                    $('#okTele').removeClass('hidden');
                }

            }

            function validateText(){
                var text = document.forms["mainForm"]["subject"].value;
                if(text == ""){
                    alert("Skriv dina synpunkter");
                    return false;
                }
            }

            
            
            $('#fname').on('keypress keydown keyup', function(){
                validateForm();
            })
            $('#ename').on('keypress keydown keyup', function(){
                validateENamn();
            })
            $('#email').on('keypress keydown keyup', function(){
                validateEmail();
            })
            $('#telefonnummer').on('keypress keydown keyup', function(){
                validateNumber();
            })
