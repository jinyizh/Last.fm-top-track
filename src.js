let num = 3; // # of tracks to display

let top_track_request = "http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&format=json" +
                        "&api_key=0bf7e6c7cb7263a825e0cc0c7ec3f39d" +
                        "&user=" + "username" +
                        "&period=" + "1month" + // overall, 7day
                        "&limit=" + num;

let tracks= [], artists = [];

$.getJSON(top_track_request, function(data) {
    // console.log(data);

    // collect data
    for (let i = 0; i < num; i++) {
        let track = [data.toptracks.track[i].name, data.toptracks.track[i].url];
        tracks.push(track);
        let artist = [data.toptracks.track[i].artist.name, data.toptracks.track[i].artist.url];
        artists.push(artist);
    }

    // append to parent p
    let passage = document.getElementById("music");
    for (let i = 0; i < num; i++) {
        let record = document.createElement('p');
        // record.innerHTML += "<img src='" + pictures[i][0]["#text"] + "' alt='album'>";
        record.innerHTML += (i + 1) + ". " + "<a href='" + artists[i][1] + "'>" + artists[i][0] + "</a>";
        record.innerHTML += " - ";
        record.innerHTML += "<a href='" + tracks[i][1] + "'>\"" + tracks[i][0] + "\"</a>";
        passage.appendChild(record);
    }
    passage.style.fontSize = "small";
});