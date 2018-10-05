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
                `<tr class="css-row">
                    <td><a href="${item.html_url}">${item.name}</a></td>
                    <td>${item.full_name}</td>
                    <td>${item.watchers}</td>
                </tr>`
            );
            $('#cssList').append(tableRow);
                i++;
         });
        
    }
    

    function loadJSON() {
        $.getJSON(
        'https://api.github.com/search/repositories?q=language:css&sort=watchers&order=desc',
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