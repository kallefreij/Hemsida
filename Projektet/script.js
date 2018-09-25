$(document).ready(()=>{
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

    
}
)