
// You can write more code here

/* START OF COMPILED CODE */

class Plat extends Phaser.Scene {

	constructor() {
		super("Plat");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// arcadesprite_1
		const arcadesprite_1 = this.physics.add.staticSprite(319, 285, "_MISSING");
		arcadesprite_1.body.allowGravity = false;
		arcadesprite_1.body.immovable = true;
		arcadesprite_1.body.setOffset(-232, -18);
		arcadesprite_1.body.setSize(496, 74, false);

		// arcadesprite_2
		const arcadesprite_2 = this.physics.add.staticSprite(537, 186, "_MISSING");
		arcadesprite_2.body.allowGravity = false;
		arcadesprite_2.body.pushable = false;
		arcadesprite_2.body.immovable = true;
		arcadesprite_2.body.setOffset(-83, -21);
		arcadesprite_2.body.setSize(206, 74, false);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
