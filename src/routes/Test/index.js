import React from 'react'
import * as THREE from 'three';
import {canvasTextAutoLine,makeTextSprite} from './makeFrontCanvas'

export default class Ceshi extends React.Component{
    componentDidMount(){
               var camera, scene, renderer;
               var onPointerDownLat,onPointerDownPointerY,onPointerDownLon,onPointerDownPointerX
            var raycaster = new THREE.Raycaster();
            var go_yangtai;
            var mouse = new THREE.Vector2();	//将鼠标位置
			var is_click;		//点击事件
			var isUserInteracting = false,
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			lon = 0, onMouseDownLon = 0,
			lat = 0, onMouseDownLat = 0,
			phi = 0, theta = 0;
            var geometry;	//球体网格
            var sushe, sushe_low;		//宿舍全景图材质
			var yangtai, yangtai_low , yangtai_flag = false;	//阳台全景图材质、转到阳台
			var mesh;		//全景球体对象
			var time = 0;	//加载计数
			var camera_time = 0;	//摄像机移动参数
			var exchange_img = false;	//切换图片标志位
			init();
			animate();

			function init() {

				var container;

				container = document.getElementById( 'three_container' );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
				camera.target = new THREE.Vector3( 0, 0, 0 );

				scene = new THREE.Scene();

				//创建一个canvas绘制文字

				//箭头板子
                go_yangtai = makeTextSprite( "　　　☝","去阳台看看");
                go_yangtai.position.set(-3,-1.5,-0.5);
                scene.add(go_yangtai);

                //全景场景
				 geometry = new THREE.SphereGeometry( 500, 60, 40 );
				geometry.scale( - 1, 1, 1 );

                sushe_low = new THREE.MeshBasicMaterial( {
					map: new THREE.TextureLoader().load( require('./sushe_low.jpg'), void function(){
                        time++ }() )} );

                yangtai_low = new THREE.MeshBasicMaterial( {
                    map: new THREE.TextureLoader().load( require('./yangtai_low.jpg'), void function(){
                        time++ }() )} );

				mesh = new THREE.Mesh( geometry, sushe_low );
				new THREE.TextureLoader().load(require('./sushe.jpg'), function (texture) {
                    	sushe = new THREE.MeshBasicMaterial( {
                        map: texture
                    } );
                    	mesh.material = sushe;
                });



				scene.add( mesh );

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );



				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		//		document.addEventListener( 'wheel', onDocumentMouseWheel, false );


				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}



			function animate() {

				requestAnimationFrame( animate );
				update();

			}

			function update() {
                //捕捉鼠标

			//	if ( isUserInteracting === false ) {

			//		lon += 0.1;

			//	}

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );

				camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
				camera.target.y = 500 * Math.cos( phi );
				camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( camera.target );

				/*
				// distortion
				camera.position.copy( camera.target ).negate();
				*/
				if(camera_time > 0 && camera_time < 50){
                    camera.target.x = -493;
                    camera.target.y = -28;
                    camera.target.z = -72;
                    camera.lookAt( camera.target );
                    camera.fov -= 1;
                    camera.updateProjectionMatrix();	//需要更新，不自动更新
                    camera_time++;
                    go_yangtai.visible = false;
				}else if(camera_time == 50){
                    lat = -2;
                    lon = 182;
                    camera_time = 0;
                    camera.fov = 75;
                    camera.updateProjectionMatrix();
                   	mesh.material = yangtai_low;
                    new THREE.TextureLoader().load('yangtai.jpg', function (texture) {
                        yangtai = new THREE.MeshBasicMaterial( {
                            map: texture
                        } );
                        mesh.material = yangtai;
                    });

				}
				renderer.render( scene, camera );
			}

			//切换场景动作
			function changeScene() {
			  //  console.log("aa");
			   camera_time = 1;
            //    mesh.material = yangtai;
            }

function onDocumentMouseDown( event ) {

    event.preventDefault();

    raycaster.setFromCamera( mouse, camera );   //射线捕捉
    var intersects = raycaster.intersectObjects([go_yangtai]);
    if ( intersects.length > 0 && time == 2) {
        changeScene();
    }

    isUserInteracting = true;
    is_click = true;
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;


    onPointerDownLon = lon;
    onPointerDownLat = lat;

}



function onDocumentMouseMove( event ) {
  //  console.log("tex", sushe);
    //屏幕位置转换到3D世界坐标系
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    if ( isUserInteracting === true ) {
        lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
        lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
    }
}
function onDocumentMouseUp( event ) {
    isUserInteracting = false;
}

function onDocumentMouseWheel( event ) {
    camera.fov += event.deltaY * 0.05;
    camera.updateProjectionMatrix();
}

    }
    render(){
        return(
            <div style={{overflow: 'hidden',margin:0}} id="three_container">
            </div>
        )
    }
}
