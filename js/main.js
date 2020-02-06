const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    //Get matches inputs
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);

    });

    if(searchText.length === 0){
        matches=[];
    }
    
}

//show result in HTML


search.addEventListener('input', () => searchStates(search.value));