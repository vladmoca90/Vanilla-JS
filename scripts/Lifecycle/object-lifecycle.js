class ObjectLifecycle {
    constructor(name) {
        this.name = name;
        this.state = "created";
    }

    initialize() {
        this.transition("created", "initialized");
    }

    start() {
        this.transition(["initialized", "stopped"], "running");
    }

    stop() {
        this.transition("running", "stopped");
    }

    destroy() {
        this.transition(["initialized", "stopped"], "destroyed");
    }

    transition(expectedStates, nextState) {
        const allowedStates = Array.isArray(expectedStates)
            ? expectedStates
            : [expectedStates];

        if (!allowedStates.includes(this.state)) {
            throw new Error(
                `Cannot move "${this.name}" from "${this.state}" to "${nextState}".`
            );
        }

        this.state = nextState;
        console.log(`${this.name}: ${this.state}`);
    }
}

const worker = new ObjectLifecycle("Worker");

worker.initialize();
worker.start();
worker.stop();
worker.start();
worker.stop();
worker.destroy();
