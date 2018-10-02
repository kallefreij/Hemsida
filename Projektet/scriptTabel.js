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
});


function listCon(){
    
}




function loadJSON(){
    $.getJSON('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors',
(data) => {
    console.log(data);
    contributors = data.contributors.map((con) => {
        return{
            ...con,
        };
    });
    listCon();
    }
);
}
loadJSON();


