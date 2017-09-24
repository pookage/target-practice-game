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
		trajectory: "projectile.trajectory"
	}
});

AFRAME.registerComponent("projectile", {
	schema: {
		trajectory: {
			default: [],
			parse: function(trajectory){
				return JSON.parse(trajectory);
			}
		}
	},
	play: function(){
		const element 		= this.el;
		const data 			= this.data;
		const launcher 		= element.parentElement;
		const trajectory 	= data.trajectory;

		
		let position = 0;
		this.interval = setInterval(() => {
			if(position > trajectory.length){
				clearInterval(this.interval);
				launcher.removeChild(element);
			}
			else {
				element.setAttribute("position", trajectory[position]);
				position++;
			}
		}, 20)
	}
})