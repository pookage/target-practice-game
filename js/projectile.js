AFRAME.registerPrimitive("a-projectile", {
	defaultComponents: {
		projectile: {},
		geometry: {
			primitive: "sphere",
			radius: 0.05
		},
		material: {
			color: "green"
		},
		animation__expand: {
			property: "geometry.radius",
			from: 0,
			to: 2,
			easing: "easeOutCirc",
			startEvents: "explode"
		},
		animation__cool: {
			property: "material.color",
			from: "#ffff00",
			to: "#ff0000",
			easing: "easeInCirc",
			startEvents: "explode"
		},
		animation__fadeOut: {
			property: "material.opacity",
			from: 1,
			to: 0,
			dur: 1000,
			easing: "linear",
			startEvents: "explode"
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
			if(!this.exploded){
				projectile.emit("explode");
				AFRAME.utils.entity.setComponentProperty(projectile, "material.shader", "flat");
				this.exploded = true;
				setTimeout(() => {
					projectile.sceneEl.removeChild(projectile);
				}, 1000)
			} 
		}

	}

});