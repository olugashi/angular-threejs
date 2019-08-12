import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements AfterViewInit  {

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;
  public scene: THREE.Scene;
  public geometry: THREE.BoxGeometry;
  public material: THREE.MeshBasicMaterial;
  public mesh: THREE.Mesh;

  public fieldOfView: number = 60;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1100;


  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
}

  constructor() {
    this.render = this.render.bind(this);

  }

  render()
  {
    let self: CubeComponent = this;

    (function render()
    {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
  }


  public init()
  {
    this.camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer( { canvas: this.canvas , antialias: true } );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.render();

  }

  public animate() {
      this.mesh.rotateX(0.1);
      this.mesh.rotateY(0.1);
  }

  ngAfterViewInit() {
    this.init();
  }

/* EVENTS */

public onMouseDown(event: MouseEvent) {
  console.log("onMouseDown");
  event.preventDefault();
 }

 public onMouseUp(event: MouseEvent) {
  console.log("onMouseUp");
}
}
