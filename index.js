let button = document.querySelector('#search-button');
let avatar = document.querySelector('#avatar');
let loginName = document.querySelector('#login-name');
var joined = document.querySelector('#joined');
let userName = document.querySelector('#username');
let bio = document.querySelector('#bio');
let repo = document.querySelector('#repos');
let followers = document.querySelector('#followers');
let following = document.querySelector('#following');
let reposTitle = document.querySelector('#repos-title');
let followersTitle = document.querySelector('#followers-title');
let followingTitle = document.querySelector('#following-title');
let dataContainer = document.querySelector('.data-container');
let dataContainerTwo = document.querySelector('.data-container-two');
let locationMap = document.querySelector('#location');
let twitter = document.querySelector('#twitter');
let blog = document.querySelector('#blog');
let github = document.querySelector('#github');
let dataText = document.querySelector('.text');
dataContainer.style.display = 'none';
dataContainerTwo.style.display = 'none';




button.onclick = async function getData() {

  let username = document.getElementById('input-search').value;

        //API CALL  with axios                   
            axios.get(`https://api.github.com/users/${username}`)
                        
            .then(
                
            async response => {
                
            let data = await response.data

        //if the request can't be processed (user is not found)

            if (response.status !== 200) {
            
                throw new Error(response.status);
            
                } else {
            

        //if the call works and the request is being 
            console.log(data);
            avatar.src = data.avatar_url;
            loginName.textContent= data.login;
            joined.textContent = data.created_at;
            userName.textContent = data.name;
            bio.textContent = data.bio;

            if( bio.textContent == null | bio.textContent == ''){
                bio.textContent = 'This profile has no bio';
            }

            let timeApi = data.created_at;

            // convert Api time into custom format

            joinedTime = new Date(timeApi).getTime();
            let day =  new Date(joinedTime).getDate();
            let month = new Date(joinedTime).toLocaleString('en-GB', {month: 'long'});
            let year = new Date(joinedTime).getFullYear();

            joined.textContent = `Joined on ${day} ${month} ${year}`;


            repo.textContent = data.public_repos.toString(10);
            reposTitle.textContent = 'Repos';
            followersTitle.textContent = 'Followers';
            followingTitle.textContent = 'Following';
            followers.textContent = data.followers.toString(10);
            following.textContent = data.following.toString(10);

            dataContainer.style.display = 'flex';
            dataContainerTwo.style.display = 'flex';            
            locationMap.textContent = data.location;
            twitter.textContent = data.twitter_username;            
            blog.textContent = data.blog;
            github.textContent = data.html_url;

            if( locationMap.textContent == '' | locationMap.textContent == null){
                locationMap.textContent = 'Not Available';
            }

            if( twitter.textContent == '' | twitter.textContent == null){
                twitter.textContent = 'Not Available';
            }

            if( blog.textContent == '' | blog.textContent == null){
                blog.textContent = 'Not Available';
            }
            
            if( github.textContent == '' | github.textContent == null){
                github.textContent = 'Not Available';
               }





            

                }})
                

                //In case of errors, shows 
                .catch (error =>
                alert(error));
                
                    

            };
