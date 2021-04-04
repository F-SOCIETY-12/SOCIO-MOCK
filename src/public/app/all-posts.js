//ye posts lane ka function hai
function loadPosts() {
    $.get('/api/posts', (posts) =>         ////localhost:3434/api/posts pe jo req send karne se response me 
    {                                    ///data milega use (posts) me leayenge
        for (let p of posts) {
            //  console.log(p)         ///leki n initally kuch show nahi hoga kyuki koi post hai hi nahi
            ///post matlab body

            $('#posts-container').append(
                $(` <div class="card my-1">
                 <div class="card-header bg-dark text-light">
                 <i class='fas fa-user-check' style='font-size:24px;color:white'></i>
                   ${p.user.username}</em>
                 </div>
                 <div class="card-body bg-light">
                   <blockquote class="blockquote mb-0">
                   <p><em>${p.title} :</em></p>
                     <p><em>"${p.body.substr(0,180)}"
                    <a href="#">...read more </em></p>
                   </blockquote>
                   <a href="#" class="card-link"><i class='far fa-comments' style='font-size:24px'></i>Comment</a>
                   <a href="#" class="card-link"><i class='far fa-thumbs-up' style='font-size:24px'></i>Like</a>
                   <a href="#" class="card-link"><i class='far fa-grin-alt' style='font-size:24px'></i>Reactions</a>
                 </div>
               </div>
                 `)
            )
        }
    })
}