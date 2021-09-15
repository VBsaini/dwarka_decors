let model1, model2, model3;
let onetime = true;
// ##########################################################
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, 400 / 500, 0.1, 1000);
camera.position.set(0, 0, 1000);
let canvas = document.querySelector(".canvas-wed");
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(400, 500);
renderer.setClearColor("#FFC0CB"); //0x );
scene.background = new THREE.Color("#FFC0CB");

const alight = new THREE.AmbientLight(0xffffff, 0.8); // soft white light
scene.add(alight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, -50, 100);
scene.add(directionalLight);

let obj;
var loader = new THREE.GLTFLoader();
loader.load("./assets/3d_model/heart_in_love/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, -0.6, 0);
    object.scale.set(3, 3, 3);
    obj = object;
    scene.add(object);
});

function animate() {
    requestAnimationFrame(animate);
    if (obj) {
        model1 = true;
        obj.rotation.y += 0.02;
    }
    renderer.render(scene, camera);
}
animate();

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(60, 400 / 500, 0.1, 1000);
camera2.position.set(0, 0.9, 2);
let canvas2 = document.querySelector(".canvas-birthday");
var renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
renderer2.setSize(400, 500);
renderer2.setClearColor("#FFC0CB");
scene2.background = new THREE.Color("#FFC0CB");

var light2 = new THREE.PointLight(0xffffff, 1.4, 1000);
light2.position.set(0, 0, 10);
scene2.add(light2);

let obj2;
loader.load("./assets/3d_model/birthday_cake/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, 0.3, 0);
    object.scale.set(45, 45, 45);
    obj2 = object;
    scene2.add(object);
});

function animate2() {
    requestAnimationFrame(animate2);
    if (obj2) {
        model2 = true;
        obj2.rotation.y += 0.01;
    }
    renderer2.render(scene2, camera2);
}
animate2();

// 3333333333333333333333333333333333333333333333333333333333333

var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera(60, 400 / 500, 0.1, 1000);
camera3.position.set(0, 0, 2);
let canvas3 = document.querySelector(".canvas-cop");
var renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
renderer3.setSize(400, 500);
renderer3.setClearColor("#FFC0CB"); //0x );
scene3.background = new THREE.Color("#FFC0CB");

const light3 = new THREE.AmbientLight(0xffffff); // soft white light
scene3.add(light3);

let obj3;
var loader3 = new THREE.GLTFLoader();
loader.load("./assets/3d_model/flower_bouquet/scene.gltf", function (data) {
    var object = data.scene;
    object.position.set(0, -0.6, 0);
    object.scale.set(3, 3, 3);
    obj3 = object;
    scene3.add(object);
});

function animate3() {
    requestAnimationFrame(animate3);
    if (obj3) {
        model3 = true;
        obj3.rotation.y += 0.01;
    }
    if (model3 & model2 & model1 & onetime) {
        doneloading();
        onetime = false;
    }
    renderer3.render(scene3, camera3);
}
animate3();
//                        intersection observer

let Navdown = (entries, observer) => {
    entries.forEach((entry) => {
        if (!document.querySelector(".main").classList.contains("hidden")) {
            if (!entry.isIntersecting) {
                document
                    .querySelector(".color")
                    .classList.remove("navbar-hidden");
            }
            if (entry.isIntersecting) {
                document.querySelector(".color").classList.add("navbar-hidden");
            }
        }
    });
};

let options = {
    rootMargin: "70%",
    threshold: 1.0,
};

let observer = new IntersectionObserver(Navdown, options);
observer.observe(document.querySelector(".images-container"));

//                            loader
function doneloading() {
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".loader").classList.remove("loader");
    document.querySelectorAll(".img").forEach((img) => {
        img.classList.add("anim");
    });
}

let kindShow = (entries, observer) => {
    entries.forEach((entry) => {
        if (!document.querySelector(".main").classList.contains("hidden")) {
            if (entry.isIntersecting) {
                document.querySelectorAll("canvas").forEach((one, i) => {
                    one.classList.add(`anim${i}`);
                });
                document.querySelectorAll(".canvas-div").forEach((one, i) => {
                    one.classList.add(`anim${i}`);
                });
            }
        }
    });
};

let optionsKind = {
    rootMargin: "90%",
    threshold: 1.0,
};

let observerKind = new IntersectionObserver(kindShow, optionsKind);
observerKind.observe(document.querySelector(".canvases"));

function formSubmit(params) {}
