AFRAME.registerPrimitive("a-projectile", {
	defaultComponents: {
		projectile: {},
		geometry: {
			primitive: "sphere",
			radius: 0.05
		},
		material: {
			color: "green"
		}
	},
	mappings: {
		range: "projectile.range"
	}
});

AFRAME.registerComponent("projectile", {
	schema: {
		range: {
			default: 30
		}
	},
	init: function(){
		const fps = 1000 / 60;
		this.tick = AFRAME.utils.throttleTick(this.throttledTick, fps, this);

	},//init
	throttledTick: function(){
		const projectile 	= this.el;
		const range 		= this.data.range;
		const mps 			= 0.2;
		const currentZ 		= AFRAME.utils.entity.getComponentProperty(projectile, "position.z");

		if(currentZ > -range){
			AFRAME.utils.entity.setComponentProperty(projectile, "position.z", currentZ-mps);
		} else {
			projectile.parentElement.removeChild(projectile);
		}

	}

});