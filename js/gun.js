AFRAME.registerPrimitive("a-gun", {
	defaultComponents: {
		gun: {},
		geometry: {
			primitive: "box",
			height: 0.1,
			width: 0.1,
			depth: 0.5
		},
		position: {
			x: 0.3,
			y: -0.3,
			z: -0.8
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


AFRAME.registerComponent("gun", {
	schema: {},
	init: function(){

		const self = this;

		window.addEventListener("keydown", parseKeydown);


		function parseKeydown(event){
			switch(event.keyCode){
				case 32:
					//SPACEBAR
					self.fire();
					break;
			}
		}//parseKeydown

	},//init
 
	fire: function(){
		
		const projectile = createProjectile();
		this.el.appendChild(projectile);

		console.log(projectile, this.el)

		function createProjectile(){
			const hammerStrength = 10;
			const ball = document.createElement("a-projectile");
			ball.setAttribute("range", hammerStrength)
			return ball;
		}//createProjectile

	}//fire
});