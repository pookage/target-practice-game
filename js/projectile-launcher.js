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
			showLine: false
		},
		trajectory: {}
	},
	mappings: {}
});
AFRAME.registerComponent("projectile_launcher", {
	schema: {
		maxDistance: {
			default: 100 //furthest that a projectile can go without being destroyed
		}
	},
	init: function(){

		//SCOPE BINDING
		//---------------------------------------------
		AFRAME.utils.bind(this.fire, this);
		AFRAME.utils.bind(this.trajectory, this);
		AFRAME.utils.bind(this.throttledTick, this);
		AFRAME.utils.bind(this.spawnProjectile, this);
		AFRAME.utils.bind(this.createTrajectory, this);

		//PRIVATE VARS
		//----------------------------------------------
		const self 			= this;
		const defaults 		= self.data;
		const tickInterval	= 500;
		this.trajectory 	= this.createTrajectory()

		//EVENT LISTENERS
		//---------------------------------------------
		window.addEventListener("keydown", parseKeydown);

		this.tick = AFRAME.utils.throttleTick(this.throttledTick, tickInterval, this);

		//LOCAL FUNCTIONS
		//---------------------------------------------
		function parseKeydown(event){
			switch(event.keyCode){
				//SPACEBAR
				case 32:
					self.fire(event);
					break;
			}
		}//parseKeydown

	},//init
	throttledTick: function(){
		const self = this;
		
	},//tick
	fire: function(event){
		const element 		= this.el;
		const projectile 	= this.spawnProjectile(this.trajectory);
		element.appendChild(projectile);

	},//fire
	spawnProjectile: function(trajectory){

		const projectile = document.createElement("a-projectile");
		projectile.setAttribute("trajectory", JSON.stringify(trajectory));
		return projectile;

	},//spawnProjectile
	createTrajectory: function(){
		const element 	= this.el;
		const startPos 	= element.getAttribute("position");
		const distance 	= 20;
		const frequency = 0.3;
		const path 		= new Array(Math.ceil(distance/frequency));

		let zpos = 0; let index = 0;
		let landmark;
		for(zpos; zpos < distance; zpos += frequency){
			path[index] = {x: startPos.x, y: startPos.y, z: startPos.z - zpos};
			index++;
		}

		return path;
	}//createTrajectory
});

