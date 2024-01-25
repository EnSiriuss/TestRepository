
// You can write more code here

/* START OF COMPILED CODE */

class bg extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 356, y ?? 242);

		// bg
		const bg = scene.add.image(49, 68, "bg");
		bg.scaleX = 0.888004985259398;
		bg.scaleY = 0.979449722133737;
		this.add(bg);

		// image_1
		const image_1 = scene.add.image(34, -385, "_MISSING");
		image_1.scaleX = -0.2878909608349063;
		image_1.scaleY = 0.4751302693420558;
		this.add(image_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
