let menuActivated= false;
function setMenuActive(query, menu) {
    // console.log("--menu--", window.location.pathname);
    if (window.location.pathname.indexOf(query)> -1) {
        menuActivated= true;
        $(menu).addClass("active");
    }
}

$(document).ready(function() {    
    setMenuActive("trending", "#link-trending");
    setMenuActive("following", "#link-following");    
    setMenuActive("videos", "#link-videos");
    setMenuActive("playlist", "#link-playlist");
    setMenuActive("profile", "#link-profile");    
    setMenuActive("analytics", "#link-analytics");    
    
    setMenuActive("chat", "#link-chat");
    if (!menuActivated) {
        $("#link-home").addClass("active");
    }
});
