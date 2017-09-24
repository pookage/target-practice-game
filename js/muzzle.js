AFRAME.registerPrimitive("a-muzzle", {
	defaultComponents: {
		muzzle: {},
		geometry:{
			primitive: "cylinder",
			radius: 0.1,
			height: 0.2
		},
		material: {
			color: "purple"
		},
		rotation: {
			x: 90,
			y: 0,
			z: 0
		}
	}
})
AFRAME.registerComponent("muzzle", {
	schema: {
		accuracy: {
			default: 1
		}
	},
	play: function(){
		const height 	= this.el.getAttribute("geometry").height;

		AFRAME.utils.entity.setComponentProperty(this.el, "position.z", -height)
	}
});