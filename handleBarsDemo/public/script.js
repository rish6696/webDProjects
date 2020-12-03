window.onload = () => {
    console.log("hello world")
}


function onClick() {
 // Retrieve the template data from the HTML (jQuery is used here).    
 var template = $('#basic-template1').html();    
 // Compile the template data into a function    
 var templateScript = Handlebars.compile(template);    
 // Define data in JSON format.    
 var context = {    
     "WelcomMsg": "Hello World!",    
     "name": "Handlebars Template Engine"    
 };    
 // Pass Data to template script.    
 var html = templateScript(context);    
 // Insert the HTML code into the page    
console.log(html)    

}