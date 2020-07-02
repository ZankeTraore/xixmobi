/*Blacky c 2020 all right received 
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      
    },

    // browser ready Event Handler
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
  
        console.log('Received Event: ' + id);
    }
};

app.initialize();
//The initialize content and begin activity;
Redirect();
//redirect content
function Redirect()
{  //loader time out
    setTimeout('locationNext()',10000);
//next activity function 
}function locationNext(){
        window.location="main/index.html";
}

//-->
