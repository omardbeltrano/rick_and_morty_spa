import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const characterDetails = await getData(id);
    
    const view = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${characterDetails.image}" alt="${characterDetails.name}" />
            <article/>
            <article class="Character-details">
                <h2>${characterDetails.name}</h2>
                <div>
                    <h3>Episodes: <span>${characterDetails.episode.length}</span></h3> </h3>
                    <h3>Status: <span>${characterDetails.status}</span></h3>
                    <h3>Species: <span>${characterDetails.species}</span></h3>
                    <h3>Gender: <span>${characterDetails.gender}</span></h3>
                    <h3>Origin: <span>${characterDetails.origin.name}</span></h3>
                    <h3>Last Location: <span>${characterDetails.location.name}</span> </h3>
                </div>
            </article>
        </div>
    `;
    return view;
}

export default Character;