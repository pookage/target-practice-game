AFRAME.registerPrimitive("a-hammer", {
	defaultComponents: {
		hammer: {},
		geometry: {
			height: 0.15,
			width: 0.11,
			depth: 0.03
		},
		position: {
			x: 0,
			y: 0,
			z: 0.2			
		},
		material: {
			color: "green"
		},
		rotation: {
			x: 10,
			y: 0,
			z: 0
		}
	},
	mappings: {
		strength: "hammer.strength"
	}
});

AFRAME.registerComponent("hammer", {
	schema: {
		strength: {
			default: 30
		}
	},
	play: function(){
		console.log("HELLOW");
	}
});