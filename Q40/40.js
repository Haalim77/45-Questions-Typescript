//function
function make_album(artist_name, album_title, tracks) {
    //creating an object
    var album = 
    //connecting object values to function
    {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling function for 1st album
var album1 = make_album("Atif", "Album title 1");
console.log(album1);
//calling function for 2nd album
var album2 = make_album("Farhan", "Album title 2");
console.log(album2);
//calling function for 3rd album including number of tracks.
var album3 = make_album("IU", "Album title 3", 10);
console.log(album3);
