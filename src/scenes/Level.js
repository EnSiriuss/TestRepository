
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// prefab
		const prefab = new Prefab(this, 859, 165);
		this.add.existing(prefab);

		// prefab_1
		const prefab_1 = new Prefab(this, 558, 115);
		this.add.existing(prefab_1);

		// bg
		const bg = new bg(this, 599, 315);
		this.add.existing(bg);

		// lists
		const colliders = [];
		const players = [prefab, prefab_1];

		this.prefab_1 = prefab_1;
		this.colliders = colliders;
		this.players = players;

		this.events.emit("scene-awake");
	}

	/** @type {Prefab} */
	prefab_1;
	/** @type {Array<any>} */
	colliders;
	/** @type {Prefab[]} */
	players;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.physics.add.collider(this.players, this.colliders);
		let camera = this.cameras.main;
		camera.setViewport(0, 0, 1280, 720);
		camera.startFollow(this.prefab_1);
		camera.setPostPipeline()
	}

	update(){
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
