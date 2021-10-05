window.addEventListener("load",(event)=>{
    getData("octocat");
});

function main() {
    let username = document.getElementById("username").value;
    getData(username);
};

const getData = (username) => {
    fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty("message")) {
                // alert("User does not exist!")
                document.getElementById("warr").style.display = "flex";
            }

            if (!data.hasOwnProperty("message")) {
                document.getElementById("warr").style.display = "none";
                document.getElementById("name-data").innerHTML = data.name;
                if (data.bio) {
                    document.getElementById("bio-data").style.opacity="1";
                    document.getElementById("bio-data").innerHTML = data.bio;
                }
                else{
                    document.getElementById("bio-data").style.opacity="0.75";
                    document.getElementById("bio-data").innerHTML = "This profile has no bio";
                }
                document.getElementById("username-data").innerHTML = data.login;

                let d = new Date(data.created_at);
                let datestring = d.getDate()  + " " + d.toLocaleString('en-us',{month:'short'})+ " " + d.getFullYear();
                document.getElementById("joined-data").innerHTML = datestring;

                document.getElementById("repos-data").innerHTML = data.public_repos;

                document.getElementById("followers-data").innerHTML = data.followers;

                document.getElementById("following-data").innerHTML = data.following;

                if (data.twitter_username) {
                    document.getElementById("twitter-data-all").style.opacity="1";
                    document.getElementById("twitter-data").innerHTML = data.twitter_username;
                }
                else{
                    document.getElementById("twitter-data-all").style.opacity="0.5";
                    document.getElementById("twitter-data").innerHTML = "Not Available";
                }
                if (data.blog) {
                document.getElementById("blog-data-all").style.opacity="1";
                document.getElementById("blog-data").innerHTML = data.blog;
                }
                else{
                    document.getElementById("blog-data-all").style.opacity="0.5";
                    document.getElementById("blog-data").innerHTML = "Not Available";
                }
                
                if (data.company) {
                document.getElementById("company-data-all").style.opacity="1";
                document.getElementById("company-data").innerHTML = data.company;  
                }
                else{
                    document.getElementById("company-data-all").style.opacity="0.5";
                    document.getElementById("company-data").innerHTML = "Not Available";
                }
               
                if (data.location) {
                document.getElementById("location-data-all").style.opacity="1";
                document.getElementById("location-data").innerHTML = data.location;
                } 
                else{
                    document.getElementById("location-data-all").style.opacity="0.5";
                    document.getElementById("location-data").innerHTML = "Not Available";
                }

                document.getElementById("avatar-data").src = data.avatar_url;
            }
        });
}

function searchKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('search').click();
        return false;
    }
    return true;
}

function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function changeMode() {
    const modeImg = document.getElementById("moon-sun");
    const modeName = document.getElementById("dark-light");

    if (modeImg.src.match("assets/icon-moon.svg")) {
        modeImg.src = "assets/icon-sun.svg";
        modeName.innerHTML = "LIGHT";
    }
    else {
        modeImg.src = "assets/icon-moon.svg";
        modeName.innerHTML = "DARK";
    }
}   
