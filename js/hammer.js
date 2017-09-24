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
			default: 10
		}
	},
	init: function(){
		console.log("HELLOW");
		const animationTrigger = document.createElement("a-animation");
		POOKAGE.utils.setAttributes(animationTrigger, {
			"attribute": "rotation",
			"from": "0 0 0",
			"to": "50 0 0",
			"dur": 3000,
			"easing": "linear",
			"begin": "reload",
			"end": "fire"
		});

		const animationFire = document.createElement("a-animation");
		POOKAGE.utils.setAttributes(animationFire, {
			"attribute": "rotation",
			"from": "50 0 0",
			"to": "-50 0 0",
			"dur": 950,
			"easing": "linear",
			"begin": "fire"
		});
		this.el.appendChild(animationTrigger);
		this.el.appendChild(animationFire);
	}
});

