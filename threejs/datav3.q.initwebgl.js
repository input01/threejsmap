  var renderer;
  var scene;
  var camera;
  var containerW ;
  var containerH ;
  var controler;

  (function(){

    (function init(){
        getDom();
        init_webgl();
        init_controler();
        init_event();
        animate();
    }());
    
    function init_webgl(){

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(85, containerW / containerH, 1, 100000000);
        // camera.lookAt(0,0,0)
        camera.position.set(0, 0, -30000);
        scene.add(camera);
        var helper = new THREE.AxisHelper( 5000000 );
        scene.add( helper );

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true});
        renderer.setClearColor( 0x222222 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( containerW, containerH );
        // renderer.shadowMap.enabled = true;
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

    }

    function init_controler(){
        controler = new THREE.TrackballControls(camera, renderer.domElement);
        controler.rotateSpeed = 1.0;
        controler.zoomSpeed = 1.0;
        controler.panSpeed = 1.0;
        // controler.noRotate = false;
        // controler.noZoom = false;
        // controler.noPan = false;
        // controler.noRoll = false;
        // controler.staticMoving = false;
        // controler.dynamicDampingFator = 0.2;
        // controler.minDistance = 0;
        // controler.MaxDistance = Infinity;                                                                                                                                                                                                                   
    }

    function init_event(){

       window.addEventListener("resize",resizeHandle,false); 
    } 

    function animate(){
        controler.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    } 

    function getDom(){
        containerW = $("#WebGL-output").width();
        containerH = $("#WebGL-output").height();
    } 

    function resizeHandle(){
        getDom(); 
        camera.aspect = containerW / containerH;
        camera.updateProjectionMatrix();
        renderer.setSize(containerW, containerH);  
    }
    
}(window));
