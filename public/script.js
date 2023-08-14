console.log("Script")

const videoGameList = fetch('http://localhost:8080/api/video-games')
.then(res => res.json())
.finally(data => { return data});

console.log(videoGameList);

async function getAllVideoGames(){
    try{
        const req = await fetch('http://localhost:8080/api/video-games');
        console.log(req);
        const res = await req.json();
        console.log(res);
        return res;
    }catch(error){
        console.error(error);
    }
}

async function getAllBoardGames(){
    try{
        const req = await fetch('http://localhost:8080/api/board-games');
        console.log(req);
        const res = await req.json();
        console.log(res);
        return res;
    }catch(error){
        console.error(error);
    }
}

const renderList = (games) => {
    const gameContainer = document.getElementById('game-container');
    games.forEach((game)=>{
        gameContainer.appendChild(renderCard(game));
    })
}

renderCard = (game) => {
    const card = document.createElement('div')
    card.className = 'card';
    card.innerHTML = `
        <div class='display'>
            <div>
                <img src=${game.imageUrl} />
            </div>
            <div class='content'>
                <p>${game.name}</p>
                <p>${game.description}</p>
                <p>${game.price}</p>
            </div>
        </div>
        `
    return card;
}

async function init(){
    const boardGameList = await getAllBoardGames();
    const videoGameList = await getAllVideoGames();
    
    renderList(videoGameList);
    renderList(boardGameList);


}

init();
/*
console.log(data);
const gamelist = document.querySelector('#vgame-list');
console.log(gamelist);

data.forEach(element => {
    console.log(element);
    const li = document.createElement('li');
    li.textContent = element.name;
    gamelist.appendChild(li);
    
        console.log(data);
        const gamelist = document.querySelector('#bgame-list');
        console.log(gamelist);
        
        data.forEach(element => {
            console.log(element);
            const li = document.createElement('li');
            li.textContent = element.name;
            gamelist.appendChild(li);
        });
    
    
    */