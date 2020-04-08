console.log('file loaded.')
$(document).on("click",".devourBtn", function(event) {
    var id = $(this).data('id');
    console.log(id)
    var isDevoured = {devoured: 1}
    event.preventDefault()
    

    $.ajax('/api/burgers/'+ id ,{
      type :'PUT',
      data: isDevoured
    }).then(()=>{
      console.log('Burger has been devoured');
        location.reload();
    })
})



  $(document).on("click", ".submitBtn", (event)=>{
    event.preventDefault();

    var newBurger = {
      name: $('#burgerName').val().trim(),
      devoured: 0
    };

    $.ajax('/api/burgers/', {
      type: 'POST', 
      data: newBurger
    }).then(function(){
      console.log("New burger named "+ newBurger.name)
        location.reload();
    });
  });