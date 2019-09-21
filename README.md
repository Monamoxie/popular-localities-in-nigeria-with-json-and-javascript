# A List of Popular Localities in Nigeria with JSON and Javascript

Sometimes it's easier getting all the states and local governments in Nigeria. Why? Because it's an information that is easily accessible and available online. 

But there are special cases where you application may need a little twist to the conventional list of records returned as Local governments. Let's assume you are building a social network for users to meet each other based on location. 

And let's assume you need a list of all popular areas within a state, and not necessarily the local goverments, that's why this area becomes useful.

Let' use a place like Lagos for example. It's easier to ask them to choose their locality from a list containing Ajah, Lekki, Victoria Island, etc than ask them to select the Local Government.

The Local government is actually Eti-osa LGA but people within the state are not so used to calling that name always. Lagos is a mega city and using such a very generic word won't always work. You need to drive down to specifics. 

Where in Eti-Osa? Ajah, Lekki.

For other states, other than Lagos and Abuja, this returns just the local governments area. But for Lagos and Abuja, the whole list is broken further to return the component areas within that LGA for 

# HOW TO USE

It's very simple. You can choose to use any language to query the data.

**With JQuery**

```html 
    <script scr="/link-to-jquery-cdn-or-a-local-copy"></script>
```

Add this to your Javascript file or simply path to file

```js
var  loader = {

    urlPath: 'states-and-localities.json',

    loadStates() {
        let states = '';
        $.getJSON(this.urlPath).done(function(states){  
            $.each(states, function(index, element) {   
                states = states[index]["state"]["name"];
            }) ;
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
                        localities += '<option value="'+lga["name"]+'">'+lga["name"] + '</option>';
                    });  
                    console.log(localities);    
                }   
            });
        });  
    }, 
}
```

**To Load all states, call **
```js
loader.loadStates();
```


**To Load all localities in a state, call**
```js
loader.loadLocalitiesFor("Lagos state");
```

