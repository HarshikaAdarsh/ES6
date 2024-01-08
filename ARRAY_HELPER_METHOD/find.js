// to look for particular element in array
var users = [
    {name : "alex"},
    {name : "ben"},
    {name : "tim"},
    {name : "ben"}
 ];

 // normal metthod
 var user;
 for(var i =0;i<users.length;i++){
    if(users[i].name === 'ben'){
       user = users[i];
    }
 }
 console.log(user);

 // find helper method
 users.find(function(user) {
    return users.name === 'Alex';
 });

 var posts= [
    { id : 2 , tittle: 'New post'},
    { id : 1 , tittle: 'old post'}
 ];
 var comment = { postId : 1 , content :'very nice' }
 
 
 function postForComment(posts ,comment){
    return posts.find (function(post){
        return post.id === comment.postId ;
    });
 }
 
 console.log (postForComment(posts , comment));