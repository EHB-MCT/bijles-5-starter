"use strict";
import StreetArtwork from './StreetArtwork.js';

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        console.log("Fetching...");
        fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=streetart&q=&rows=100')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //console.log(data.records);
            data.records.forEach(item => {
                console.log(item);
                const artist = item.fields.name_of_the_artist;
                let photoID = '';
                if(item.fields.photo) {
                    const photoID = item.fields.photo.id;
                }
                const year = item.fields.annee;
                const coords = {
                    lat: item.geometry.coordinates[1],
                    long: item.geometry.coordinates[0]
                };
                const artwork = new StreetArtwork(artist, photoID, year, '', coords);
                this.items.push(artwork);
            });
        })
    },
    onSearch() {
    },
    render() {
        
    }

}

app.init();

//Testing our class
/*
const artworkTest = new StreetArtwork(
    "Artist", 
    "9876c9a3f300f29c8ee619765c1ad768", 
    2022, 
    "Nijverheidskaai 173", 
    {
        lat: 50.839982,
        long: 4.360680
    }
);


const listHtml = document.getElementById('list');
listHtml.innerHTML = artworkTest.htmlString;
*/