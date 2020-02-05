class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(userData){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <h3 class="font-weight-bold text-info">${userData.login}</h3>
                        <img class="img-fluid mb-2" src="${userData.avatar_url}"/>
                        <a type="button" class="btn btn-primary btn-block" href="${userData.html_url}" target="blank" >Go to Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-pill badge-primary">Public Repos: ${userData.public_repos}</span>
                        <span class="badge badge-pill badge-primary">Followers: ${userData.followers}</span>
                        <span class="badge badge-pill badge-primary">Following: ${userData.following}</span>
                    
                        <div id="repos"></div>
                    </div>

                    
                </div>
            </div>
        
        
        `;
    }

    showRepos(repos){
        let repoArrayElement = '';

        repos.forEach(repo => {
            repoArrayElement += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                </div>
            </div>
            `;

            document.getElementById('repos').innerHTML = repoArrayElement;
        });
    }
}