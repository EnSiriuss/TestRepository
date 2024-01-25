
// You can write more code here

/* START OF COMPILED CODE */

class Plat extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 375, y ?? 295, texture || "platform", frame);

		scene.physics.add.existing(this, true);
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(505, 97, false);

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
