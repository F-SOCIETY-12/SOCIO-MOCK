function allusers()   //hum yaha se iss route pe request bhejni hai aur bas jo b res.send ke though milega
{                       //use callback()ke through print kardena hai
    $.get('/api/users/allusers',(allusers)=>
    {
    for (let u of allusers)
    {
        $('#allusers-container').append(
            $(` <div class="col-4 card p-4" style="margin-top:40px; margin-left: 110px; margin-bottom:40px;
            box-shadow:gray 8px 8px 8px; background-color:rgba(196, 28, 140, 0.1);" >
            <h2><i class='fas fa-address-book' style='font-size:24px'></i> ${u.id}</h2>
            <h3><i class='fas fa-user-check' style='font-size:36px'></i>
            ${u.username}</em></h3>
          </div>
             `)
        )
    }
    })

}

/*<div class="card-header bg-dark text-light">
            <i class='fas fa-user-check' style='font-size:24px;color:white'></i>
              ${u.username}</em>
            </div>*/