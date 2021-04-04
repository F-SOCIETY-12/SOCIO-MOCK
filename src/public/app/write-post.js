$(()=>
{
    let userid = $('#Input-ID')
    let title = $('#Input-Title')
    let comment = $('#Comment-Text')

    $('#btnAddPost').click(function ()
    {
        $.post('/api/posts',{
            userId : userid.val(),
            title : title.val(),
            body : comment.val()
        },
        function ()
        {
            window.alert("post has been added")
        }
        )
    })
    
    
})