AFRAME.registerPrimitive("a-hammer", {
	defaultComponents: {
		hammer: {},
		geometry: {
			height: 0.1,
			width: 0.1,
			depth: 0.2
		},
		position: {
			x: 0.3,
			y: -0.3,
			z: -0.5			
		},
		material: {
			color: "black"
		}
	},
	mappings: {
		strength: "hammer.strength"
	}
});

AFRAME.registerComponent("hammer", {
	schema: {
		strength: {
			default: 10
		}
	},
	init: function(){
		console.log("HELLOW");
	}
});