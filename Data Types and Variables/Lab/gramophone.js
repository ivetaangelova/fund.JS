function solve (band, album, song){
 let time=(album.length * band.length) * song.length / 2;
//  console.log(time);
 let rotation = Math.ceil(time/2.5);
 console.log(rotation);

}
solve('Black Sabbath', 'Paranoid','War Pigs');
solve('Rammstein', 'Sehnsucht','Engel');