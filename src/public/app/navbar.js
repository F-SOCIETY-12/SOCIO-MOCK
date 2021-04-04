let navlinks = $('.navbar-nav .nav-link')  ///ye sare links and objects dedeta hai ye navlinks me 
                                 ///jiske through hum access karsakte hai 

navlinks.click((ev)=>
{
    //console.log($(ev.target).attr('data-component')) ///-->to yaha pe data-compo="" wale attribute me
                                                     // jo dala hoga ye uss cheez ko load kardega
                                            //without reload the page 
                                            //data-component="write-post"
                                            //to click hone pe write post ke andar ka code load hojayega

    let componentUrl = `/components/${$(ev.target).attr('data-component')}.html` 
                        ///-->yaha upar ev.target se jo  b data component ka naam mil raha hai
                     //-->usko components folder me jo files hai usse match karake uska
                     //address componenturl me save kardiya hai

    $('#content').load(componentUrl)  //aur yaha wo load kardiya gaya hai
})



