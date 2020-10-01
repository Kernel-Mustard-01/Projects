window.onload = function (){

    
};

// function* gen(){
//     let x = yield 10;
//     console.log(x);
// }

// let myGen = gen();
// console.log(myGen.next());
// console.log(myGen.next(10));

// function handleError(jqXHR, textStatus, error){
//     console.log(error);
// }

// $.ajax({
//   type: 'GET',
//   url: 'tweets.json',
//   success: cbTweets,
//   error: handleError
// });

// function cbTweets(data){
//     console.log(data);

// $.ajax({
//     type: 'GET',
//     url: 'friends.json',
//     success: cbFriends
//     error: handleError
//     });

//     }
    
// function cbFriends(data){
//      console.log(data);

//         $.ajax({
//             type: 'GET',
//             url: 'videos.json',
//             success: function (data){
//                 console.log(data);
      
//             },
//             error: handleError
//           });
//         }


// function cb(data){
//     console.log(data);
// }

// $.get("tweets.json", cb);
// console.log("test");




// function callback(val){
//     console.log(val);
// }

// let fruits = ["banana", "apple", "pear"];
// fruits.forEach(callback);
// console.log("done");
// let http = new XMLHttpRequest();

// http.onreadystatechange = function (){
//     if(http.readyState == 4 && http.status == 200){
//         //console.log(JSON.parse(http.responseText));
//     }
// };
    

// http.open("GET", "tweets.json", true);
// http.send();
// // console.log("test");

// $.get("tweets.json", function (data){
//     console.log(data);
// });
// console.log("test")
// };