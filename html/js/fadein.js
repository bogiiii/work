 $(document).ready(function() {
  $('body').fadeIn(1000);
  $('a.link').click(function(event) {
   event.preventDefault();
   newLocation = this.href;
   $('body').fadeOut(1000, newpage);
  });
  
  function newpage() {
   window.location = newLocation;
  }
 });
