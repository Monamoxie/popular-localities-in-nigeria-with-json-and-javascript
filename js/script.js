var  loader = {

    urlPath: 'json/nigeria-states-and-localities.json',

    loadStates() {
        let states = '';
        $.getJSON(this.urlPath).done(function(states_data){  
            $.each(states_data, function(index, element) {   
                states += states_data[index]["state"]["name"] + '\n';
            });
            console.log(states);
        });    
    }, 

    loadLocalitiesFor(state) {
        $.getJSON(this.urlPath).done(function(states_data){  
            $.each(states_data, function(index, element) {
                if (states_data[index]["state"]["name"] === state)
                {
                    let localities = '';  
                    $.each(states_data[index]["state"]["locals"], function(i, lga) {
                        localities += lga["name"] + '\n';
                    });  
                    console.log(localities);    
                }   
            });
        });  
    }, 
}