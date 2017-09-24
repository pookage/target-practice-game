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

		const self = this;
		const direction = calculateDirection(this.el);
		const projectile = createProjectile(direction);
		this.el.appendChild(projectile);

		function calculateDirection(gun){

			const muzzle 		= gun.getElementsByTagName("a-muzzle")[0];
			const hammer 		= gun.getElementsByTagName("a-hammer")[0];

			const bodyPos 		= gun.object3D.getWorldPosition();
			const muzzlePos		= muzzle.object3D.getWorldPosition();
			const direction 	= {	x: bodyPos.x - muzzlePos.x,
									y: bodyPos.y - muzzlePos.y,
									z: bodyPos.z - muzzlePos.z }; 
			
			return direction;
		}//calculateDirection
		function createProjectile(path){
			const hammerStrength = 10;
			const ball = document.createElement("a-projectile");
			ball.setAttribute("range", hammerStrength);
			ball.setAttribute("direction", path)
			return ball;
		}//createProjectile

	}//fire
});