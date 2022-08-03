console.log('On top')

function onLinkedInLoad() {

  //IN.Event.on(IN, "auth", onLinkedInAuth);
  //IN.User.authorize(onLinkedInAuth);
  IN.Event.on("IN", "auth", onLinkedInAuth);
  console.log('Inside onLinkedInLoad')
}
function onLinkedInAuth() {
  console.log(6576767)
  /*IN.API.Profile("me")
    .fields("firstName", "lastName", "industry", "location:(name)", "picture-url", "headline", "summary", "num-connections", "public-profile-url", "distance", "positions", "email-address", "educations", "date-of-birth")
    .result(displayProfiles)
    .error(displayProfilesErrors);*/
    IN.API.Raw("/companies/000000/updates")
        .method("GET")
        .result(function(res) {
           document.write(JSON.stringify(res));
        });
        
}

function displayProfiles(profiles) {
  member = profiles.values[0]; console.log(profiles, '--------')
  alert(JSON.stringify(member));
  
  /*document.getElementById("lblName").innerHTML = member.firstName + " " + member.lastName + "<br/> Location is " + member.location.name ;
  document.getElementById("imgProfile").src = member.pictureUrl;
  document.getElementById("lblEmail").innerHTML = member.emailAddress;
  document.getElementById("lblProfile").innerHTML = member.publicProfileUrl;*/
}

function displayProfilesErrors(error) {
  profilesDiv = document.getElementById("profiles");
  profilesDiv.innerHTML = error.message;
  console.log(error);
}