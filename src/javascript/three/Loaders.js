import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { postProcessing } from "./Experience"

export class Loaders {
  constructor() {
    this.loadingManager = new THREE.LoadingManager(() => {
      // postProcessing.setPostProcessing()
    })

    this.textureLoader = new THREE.TextureLoader()

    this.gltfLoader = new GLTFLoader(this.loadingManager)
  }
}
