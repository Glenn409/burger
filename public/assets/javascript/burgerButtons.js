

$(document).on('click', '.devourButton',function(){
    let id = $(this).attr('value')

    let obj = {
        devoured: true
    }

    $.ajax('/api/burgers/' + id,{
        type:'PUT',
        data: obj
    }).then(function(){
        location.reload()
    })
})

$(document).on('click', '#submit-button',function(){
    console.log("pressed")
    const newBurger = $('#input-form').val().trim()
    console.log("creating burger: " + newBurger)
    let obj = {
        burger: newBurger
    }
    $.ajax('/api/burgers/new',{
        type:'POST',
        data: obj
    }).then(function(){
        location.reload()
    })
})