AFRAME.registerPrimitive("a-projectile", {
	defaultComponents: {
		projectile: {},
		geometry: {
			primitive: "sphere",
			radius: 0.1
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
		const speed = 1000 / 60;
		this.tick = AFRAME.utils.throttleTick(this.throttledTick, speed, this);

		console.log(this.el.object3D.getWorldPosition());

	},//init
	throttledTick: function(){
		const projectile 	= this.el;
		const range 		= this.data.range;
		const distance 		= 0.1;
		const currentZ 		= AFRAME.utils.entity.getComponentProperty(projectile, "position.z");

		if(currentZ > -range){
			AFRAME.utils.entity.setComponentProperty(projectile, "position.z", currentZ-distance);
		} else {
			projectile.parentElement.removeChild(projectile);
		}

	}

});