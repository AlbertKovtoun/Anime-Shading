import * as THREE from "three"
import { loaders, scene } from "./Experience"
import { AnimeMaterial } from "./AnimeMaterial"
import { AnimeOutlines } from "./AnimeOutlines"

export class Model {
  constructor() {
    loaders.gltfLoader.load("/models/girl.glb", (gltf) => {
      this.modelGroup = gltf.scene

      this.model = this.modelGroup.children[0]

      this.model.material = new AnimeMaterial(this.model)
      new AnimeOutlines(this.model, 2)

      scene.add(this.modelGroup)
    })
  }
}
