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
		range: "projectile.range",
		direction: "projectile.direction"
	}
});

AFRAME.registerComponent("projectile", {
	schema: {
		range: {
			default: 50
		},
		direction: {
			default: {x: 0, y: 0, z: -1},
			parse: function(direction){
				return JSON.parse(direction);
			}
		}
	},
	init: function(){
		const fps = 1000 / 60;
		this.tick = AFRAME.utils.throttleTick(this.throttledTick, fps, this);
		this.travelled = 0;

	},//init
	throttledTick: function(){
		const projectile 	= this.el;
		const range 		= this.data.range;
		const direction 	= this.data.direction;
		const speed 		= 1;

		if(this.travelled < range){
			const currentPos 	= projectile.getAttribute("position");
			const newPosition 	= {
				x: currentPos.x - (direction.x*speed),
				y: currentPos.y - (direction.y*speed),
				z: currentPos.z - (direction.z*speed)
			};
			projectile.setAttribute("position", newPosition);
			this.travelled += speed;
		} else {
			projectile.sceneEl.removeChild(projectile);
		}

	}

});