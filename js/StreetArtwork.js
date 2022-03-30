export default class StreetArtwork {
    constructor(artist, photoID, year, adress, coords) {
        this._artist = artist;
        this._photoID = photoID;
        this._year = year;
        this._adress = adress;
        this._coords = coords;
    }

    get photoUrl() {
        return `
        https://opendata.brussels.be/explore/dataset/street-art/files/${this._photoID}/300/
        `
    }

    get htmlString() {
        return `
        <div class="item">
            <div>
                <div class="item-field">Artist: ${this._artist}</div>
                <div class="item-field">Adress: ${this._adress}</div>
                <div class="item-field">Year: ${this._year}</div>
            </div>
            <div>
                <img src="${this.photoUrl}" />
            </div>
        </div> 
        `
    }
}