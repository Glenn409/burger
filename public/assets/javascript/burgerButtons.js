

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