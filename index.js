var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0.5, 2);
let canvas = document.querySelector(".canvas-wed");
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(500, 500);
renderer.setClearColor("#FFC0CB"); //0x );
scene.background = new THREE.Color("#FFC0CB");

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

let obj;
var loader = new THREE.GLTFLoader();
loader.load("./assets/3d_model/flower_bouquet/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, -0.5, 0);
    object.scale.set(5, 5, 5);
    obj = object;
    scene.add(object);
});

function animate() {
    requestAnimationFrame(animate);
    if (obj) {
        obj.rotation.y += 0.02;
    }
    renderer.render(scene, camera);
}
animate();

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera2.position.set(0, 0.9, 2);
let canvas2 = document.querySelector(".canvas-birthday");
var renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
renderer2.setSize(500, 500);
renderer2.setClearColor("#FFC0CB"); //0x );
scene2.background = new THREE.Color("#FFC0CB");

var light2 = new THREE.PointLight(0xffffff, 1.4, 1000);
light2.position.set(0, 0, 10);
scene2.add(light2);

let obj2;
loader.load("./assets/3d_model/birthday_cake/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, 0.3, 0);
    object.scale.set(100, 40, 100);
    obj2 = object;
    scene2.add(object);
});

function animate2() {
    requestAnimationFrame(animate2);
    if (obj2) {
        obj2.rotation.y += 0.02;
    }
    renderer2.render(scene2, camera2);
}
animate2();

// 3333333333333333333333333333333333333333333333333333333333333

var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera3.position.set(0, 0, 2);
let canvas3 = document.querySelector(".canvas-cop");
var renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
renderer3.setSize(500, 500);
renderer3.setClearColor("#FFC0CB"); //0x );
scene3.background = new THREE.Color("#FFC0CB");

const light3 = new THREE.AmbientLight(0xffffff); // soft white light
scene3.add(light3);

let obj3;
var loader3 = new THREE.GLTFLoader();
loader.load("./assets/3d_model/flower_bouquet/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, -1, 0);
    object.scale.set(5, 5, 5);
    obj3 = object;
    scene3.add(object);
});

function animate3() {
    requestAnimationFrame(animate3);
    if (obj3) {
        obj3.rotation.y += 0.02;
    }
    renderer3.render(scene3, camera3);
}
animate3();
