AFRAME.registerPrimitive("a-projectile-launcher", {
	defaultComponents: {
		projectile_launcher: {},
		geometry: {
			primitive: "box",
			height: 0.1,
			width: 	0.1,
			depth: 	0.4
		},
		material: {
			color: "blue"
		},
		raycaster: {
			showLine: true
		}
	},
	mappings: {}
});
AFRAME.registerComponent("projectile_launcher", {
	schema: {},
	init: function(){

		//SCOPE BINDING
		//---------------------------------------------
		AFRAME.utils.bind(this.fire, this);
		const self = this;

		//EVENT LISTENERS
		//---------------------------------------------
		window.addEventListener("keydown", parseKeydown);


		//LOCAL FUNCTIONS
		//---------------------------------------------
		function parseKeydown(event){
			switch(event.keyCode){
				case 32:
					self.fire(event);
					break;
			}
		}//parseKeydown
	},//init
	fire: function(event){
		console.log("fire : ", event)
	}//fire
})