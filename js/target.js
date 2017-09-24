
AFRAME.registerPrimitive("a-target", {
	defaultComponents: {
		target: {},
		geometry: {
			primitive: "circle",
			radius: 2
		},
		material: {
			color: "red"
		}
	},
	mappings: {}
});

AFRAME.registerComponent("target", {
	schema: {},
	init: function(){

	}
})