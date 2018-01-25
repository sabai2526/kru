
var items = [ {id: 1},{id: 2},{id: 3},{id: 4} ];
var data_items = items.filter(function(items){
    return (items.id % 2 == 0);
});
console.log(data_items);
//prints [ {id: 2 }, {id: 4} ]


