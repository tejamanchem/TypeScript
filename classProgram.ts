class Song{
    song_title:string;
    song_singer:string;
    album_name:string;

    constructor(song_title,song_singer,album_name){
        this.song_title=song_title;
        this.song_singer=song_singer;
        this.album_name = album_name;

    }
}


var song_rrr = new Song("thera","abc","rrr");

var song1_rrr = new Song("nannnn","kk","rrr");

var song2_rrr = new Song("kom","hithi","rrr");

var array_songs = [song_rrr,song1_rrr,song2_rrr];
console.log(array_songs);