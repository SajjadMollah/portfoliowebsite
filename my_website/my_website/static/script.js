console.log('Hello world')


function showHome() {
  var aboutPage= document.getElementsByClassName("main-page")[0];
  aboutPage.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function showAbout() {
    var aboutPage= document.getElementsByClassName("about-page")[0];
    aboutPage.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function showProjects() {
    var aboutPage= document.getElementsByClassName("projects-page")[0];
    aboutPage.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function showContacts() {
    var aboutPage= document.getElementsByClassName("contacts-page")[0];
    aboutPage.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  
