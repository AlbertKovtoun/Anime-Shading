import * as THREE from "three"

import animeMaterialVertexShader from "../../shaders/animeMaterialShader/vertex.glsl?raw"
import animeMaterialFragmentShader from "../../shaders/animeMaterialShader/fragment.glsl?raw"
import { loaders } from "./Experience"

export class AnimeMaterial {
  constructor(model) {
    this.texture = model.material.map
    //I have to do this for some reason
    this.texture.colorSpace = ""

    this.material = new THREE.ShaderMaterial({
      vertexShader: animeMaterialVertexShader,
      fragmentShader: animeMaterialFragmentShader,

      uniforms: {
        uTexture: { value: this.texture },
      },
    })

    return this.material
  }
}
