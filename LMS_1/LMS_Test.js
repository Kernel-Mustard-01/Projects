function goGetEm() {
            var thisPassword = document.getElementById("f_password").value;
            var thisUrl = 'https://www.digitalfields.co.za/blairsite/test.cfc?method=login&password=' + thisPassword
            fetch(thisUrl) // Call the fetch function passing the url of the API as a parameter
                .then(function(whatCameBack) {

                    if (whatCameBack.status === 200) {
                        alert('Yes');

                    } else

                    {
                        alert('Oops');  
                    }

                    // Your code for handling the data you get from the API
                    console.log('whatCameBack', whatCameBack);                    
                    return whatCameBack.json();
                    })
                .then(function(showText) {
                    console.log('showText',showText)
                })
                .catch(function(whatWentWrong) {
                    // This is where you run code if the server returns any errors
                    console.log('whatWentWrong', whatWentWrong);
                });



        }

        function listusers() {
            var thisUrl = 'https://www.digitalfields.co.za/blairsite/test.cfc?method=listUsers';
            fetch(thisUrl) // Call the fetch function passing the url of the API as a parameter
                .then(function(whatCameBack) {
                

                    // Your code for handling the data you get from the API                
                    return whatCameBack.json();
                    })
                .then(function(showText) {
                    // see if you can list this on HTML page
                   
                    
                    var thisList = showText.DATA;
                 console.log(thisList);
//
////                    var str = '<ul>'
                var tableStuffRow = '';
                 var tableStuffStart = '<table>';
                document.getElementById("listContainer").innerHTML = tableStuffStart;
////                 document.getElementById("listContainer").innerHTML = str;
                    thisList.forEach(function (item, index) {
                         tableStuffRow += '<tr><td>'+item[0] + '</td><td>' +  item[1]  + '</td><td>' +item[2] + '</td></tr>';
//// 
//////                    console.log(item, index);
//////                         str += '<li>'+ '|  ' + item[0] + '  |  ' +  item[1]  + '  |  ' + '  ('+item[2] + ')  '+ '  |' + '</li>';
                    });
//////                    str += '</ul>';
//////                    document.getElementById("listContainer").innerHTML = str;
                       document.getElementById("listContainer").innerHTML = tableStuffRow;
                                 var tableStuffEnd = '</table>';
//
                })
                .catch(function(whatWentWrong) {
                    // This is where you run code if the server returns any errors
                    console.log('whatWentWrong', whatWentWrong);
                });



        } 
 
        
        function addUser() {


            var thisUrl = 'https://www.digitalfields.co.za/blairsite/test.cfc?method=addUser2';
                var formData = new FormData();

                formData.append('fname', document.getElementById('fname').value);
                formData.append('sname', document.getElementById('sname').value);
                formData.append('emailaddress', document.getElementById('emailaddress').value);
                formData.append('password', document.getElementById('password').value);
                formData.append('ridernumber', document.getElementById('ridernumber').value);

                fetch(thisUrl, {
                    method: "POST",
                    body: formData
                    })

                .then(function(whatCameBack) {


                    // Your code for handling the data you get from the API
                    console.log('whatCameBack', whatCameBack);                    
                    return whatCameBack.json();
                    })
                .then(function(showText) {
                                alert('Here3');
                    console.log('showText',showText);
                    // see if you can list this on HTML page
                })
                .catch(function(whatWentWrong) {
                    // This is where you run code if the server returns any errors
//                    console.log('whatWentWrong', error);
                });



        } 

        
        function showPassword() {
            var thisOne = document.getElementById("f_password").value;
            console.log(document.getElementById("f_password").value);
   
    
        
        }





