import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-points-cloud',
  templateUrl: './points-cloud.component.html',
  styleUrls: ['./points-cloud.component.css']
})
export class PointsCloudComponent implements AfterViewInit {

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  public geometry: THREE.BoxGeometry;

  @ViewChild('canvasPointsCloud', {static: false})
  private canvasRef: ElementRef;

  constructor() {
    this.render = this.render.bind(this);

  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
}

  init() {
    this.renderer = new THREE.WebGLRenderer( { canvas: this.canvas , antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 45.0, window.innerWidth / window.innerHeight, 5, 3500 );
    this.camera.position.z = 2500;


    this.createScene();
  }
  createScene() {

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x000000 );
    /*this.geometry = new THREE.BufferGeometry();
    var positions = [];

    for ( var i = -250; i < 250; ++i) {
        for ( var j = -150; j < 150; ++j) {
          positions.push(i, j, 0);
        }
    }

    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );

    var material = new THREE.PointsMaterial({color: 0xFFFFFF});
    points = new THREE.Points(geometry, material);
    scene.add(points);

    //create box based on pointcloud extends
    var geometry = new THREE.BoxGeometry(500, 300, 1 );
    boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    boxMaterial.visible = false //set invisible by default
    box = new THREE.Mesh(geometry, boxMaterial);
    scene.add(box);*/
  }


  render()
  {
    const self: PointsCloudComponent = this;

    (function render()
    {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
  }

  private animate() {

  }
  ngAfterViewInit(): void {
    this.init();
  }


}
