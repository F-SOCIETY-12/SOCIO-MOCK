////now here we are using JQUERY() load() function 
$(() => {
    $('#navbar').load('components/navbar.html', loginIfNeeded)  ///it means navbar id  pe ye navbar.html load kardega
    $('#footer').load('components/footer.html')
    $('#content').load('components/all-posts.html')  ///this contains its own scripts
    $('#content').load('components/all-users.html')

})

///ye login karne ka function hai
function loginIfNeeded() {
    ///ye window.user ye check karleta hai ki phle se userobject hai ya nahi 
    //agar hai to usko parse karta hai aur agar nahi hai to usko null set karta ahi
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    //if phle se nahi 
    ///to fetch karke layenge
    console.log(currentUser)
    if (!currentUser) {
        $.post('/api/users', {}, (user) =>  ////(data)=>{} is a call back function  ///iss tarah se hum data leke 
        ////api/users se aur usko frontend pe print kar rahe hai
        {
            if (user) {
                console.log(user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                console.log($('#nav-username'))
                //ab yaha pe navbar wali id me username ko dalna hai 
                $('#nav-username').text(currentUser.username)
            }
        })
    }
    else {

        //ye else wala part chalega if currentUSer phle se hai yaha pe
        console.log('resuming session as', currentUser.username)
        console.log($('#nav-username'))
        $('#nav-username').text(currentUser.username)
    }
}

