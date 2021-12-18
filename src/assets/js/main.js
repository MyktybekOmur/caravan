var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;
img = '';


function addPhoto(img1) {
    img = img1;
    console.log(img);





}
panorama = new PANOLENS.ImagePanorama('https://l13.alamy.com/360/T0EK6C/360-in-our-caravan-spot2-T0EK6C.jpg');
container = document.querySelector('#img360');

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(500, 500, -5000);
infospot.addHoverText('Hello Panolens', 30);
panorama.add(infospot);


viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);