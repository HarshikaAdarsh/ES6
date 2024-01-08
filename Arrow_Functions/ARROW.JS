//this keyword 
//lexical this = its mean the placement od this term depends on how its interpreted 
// in another words - depending on where we are placing the word this, it will chnage when we're using a fat arrow function
const team ={
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',

  teamSummary : function(){
    return this.members.map((member) => {
       return `${member} is on team ${this.teamName}`;
    });
  }
};
teamSummary();
