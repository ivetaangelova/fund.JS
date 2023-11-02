function solve(arr) {
    class Song {
        typeList;
        name;
        time;
        constructor (typeList, name, time){
            this.typeList= typeList;
            this.name= name;
            this.time= time;
        }
    }

let songCount=arr.shift();
let typeFilter=arr.pop();

let songs= arr.map(song => {
    let tokens=song.split(`_`);
    let typeList= tokens[0];
    let name= tokens[1];
    let time= tokens[2];
    return new Song(typeList, name, time);
})
if(typeFilter=== 'all'){
    for(let song of songs){
        console.log(song.name);
    }
}else{
    let filteredSongs= songs.filter(song=> song.typeList===typeFilter);
    for(let song of filteredSongs){
        console.log(song.name);
    }
}
}
// solve([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// );
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])