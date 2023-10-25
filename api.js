class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }

    static renderUserData(data) {
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class="card-head">
        <div class="user-image">
            <img src="${user.picture.large}" alt="">
        </div>
    </div>
    <div class="card-body">
        <div class="user-name" style="text-align: center;">
            <span class="user-name-title">${user.name.title}.</span>
            <br>
            <span class="user-name-full">${user.name.first} ${user.name.last}</span>
        </div>
    
            <div class="user-address" style="text-align: center;">
                <span style="color: red;">Direccion: </span>
                <div class="user-post-address">
                    <span style="color: white;">Avenida Maipu 91342</span>
                </div>
            </div>
    
            <div class="user-skills" style="text-align: center; color: red;">
                <span>Habilidades:</span>
                <div class="user-location-address">
                    <span>Cardio, Crossfit, Boxeo</span>
                </div>
            </div>
        </div>
    
        <div class="card-foot">
            <div class="user-contact-info" style="text-align: center;">
                <span>
                    <i class="fa-solid fa-phone" style="color: #cb2525;"></i> ${user.phone}
                </span>
                <br>
                <span>
                    <i class="fa-solid fa-envelope" style="color: #cb2525;"></i> ${user.email}
                </span>
            </div>
        </div>`;
    }
}


document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});

RandomUser.fetchFromAPI();