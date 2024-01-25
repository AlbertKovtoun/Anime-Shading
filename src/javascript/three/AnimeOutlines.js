import * as THREE from "three"
import { scene } from "./Experience"

export class AnimeOutlines {
  constructor(mesh, outlineThickness) {
    this.mesh = mesh
    this.outlineThickness = outlineThickness

    this.geometry = this.mesh.geometry
    this.material = new THREE.ShaderMaterial({
      vertexShader: `

        uniform float uOutlineThickness;        

        void main() {
          vec3 newPosition = position + normal * uOutlineThickness * 0.001;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
      `,

      uniforms: {
        uOutlineThickness: { value: this.outlineThickness },
      },

      side: THREE.BackSide,
    })

    this.outline = new THREE.Mesh(this.geometry, this.material)
    scene.add(this.outline)
  }
}
