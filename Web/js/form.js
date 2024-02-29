/*External Javascript for form validation*/
/*function to validate the form*/  
function validateForm() {
                        /*insertion of the variables of the fomr*/ 
                        var fname = document.forms["contactForm"]["firstname"].value;
                        var lname = document.forms["contactForm"]["lastname"].value;
                        var location = document.forms["contactForm"]["location"].value;
                        var email = document.forms["contactForm"]["email"].value
                        var number = document.forms["contactForm"]["phone"].value;
                        var queries = document.forms["contactForm"]["query"].value;
                         /*using if function for each variable of the form*/ 
                         if (fname == "") 
                         {
                              /*function to send a pop-up alert with the desired notice*/ 
                              alert("Please enter your first name");
                              return false  
                         }

                         if (lname == "")
                         {
                              alert("Please enter your last name");
                          return false
                         } 

                         if (location == "") 
                         {
                              alert("Please enter your location");
                              return false
                         }

                         if (email == "")
                         {
                              alert("Please enter your email address");
                              return false
                         }

                         if (number == "") 
                         {
                              alert("Please enter your number");
                              return false
                         }
                         if (queries == "") 
                         {
                              alert("Please state your query")
                              return false
                         }
                  }
