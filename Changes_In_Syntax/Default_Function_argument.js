
function makeAjaxRequest(url, method)
//so In case if we dont want to write extra code but have to give default value we can give it to the fucntion argument itself
// function makeAjaxRequest(url, method = 'GET')
{
    if (!method ){
        method = 'GET';
    };
}

makeAjaxRequest('goggle.com');
makeAjaxRequest('google.com','GET');

//another example
function User(id){
 this.id = id;
}
function generateId(){
    return Math.random() * 99999999;

}
 function createAdminUser(user) {
    // function createAdminUser (user = new User(generateId))
    user.admin =  true;
    return user; 
}
 // const user = new User(generateId);
 createAdminUser(new User(generateId()));
 // instead to giving default value here we can give that where we have passed user value on funciton