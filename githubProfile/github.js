class Github {
    
    constructor(){
        this.client_ID = "dbb1914f63a025a1aa31";
        this.client_secret = "58d8d9b4a18965542d708982635d642b7bcfe391";
        this.user = "frozyice";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
        this.apiUrl = "https://api.github.com/users/";
    }

    async getUserData(){
        let urlProfile =`${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponce = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponce.json();

        return{
            profile, repos
        }

    }
}