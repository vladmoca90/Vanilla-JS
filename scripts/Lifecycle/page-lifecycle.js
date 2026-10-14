(() => {
    let eventList;

    function logLifecycleEvent(name, details = "") {
        const message = details ? `${name}: ${details}` : name;
        console.log(`[Page lifecycle] ${message}`);

        if (eventList) {
            const item = document.createElement("li");
            item.textContent = message;
            eventList.append(item);
        }
    }

    function initializeDemo() {
        if (!document.body || eventList) {
            return;
        }

        const panel = document.createElement("section");
        const heading = document.createElement("h1");
        eventList = document.createElement("ol");

        heading.textContent = "JavaScript page lifecycle";
        panel.append(heading, eventList);
        document.body.append(panel);

        logLifecycleEvent("DOM ready", `readyState is "${document.readyState}"`);
    }

    logLifecycleEvent(
        "Script evaluated",
        `readyState is "${document.readyState}"`
    );

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeDemo, {
            once: true,
        });
    } else {
        initializeDemo();
    }

    if (document.readyState === "complete") {
        logLifecycleEvent("Page loaded");
    } else {
        window.addEventListener(
            "load",
            () => logLifecycleEvent("Page loaded"),
            { once: true }
        );
    }

    document.addEventListener("visibilitychange", () => {
        logLifecycleEvent("Visibility changed", document.visibilityState);
    });

    window.addEventListener("pageshow", (event) => {
        logLifecycleEvent(
            "Page shown",
            event.persisted ? "restored from the back-forward cache" : "new load"
        );
    });

    window.addEventListener("pagehide", (event) => {
        logLifecycleEvent(
            "Page hidden",
            event.persisted ? "saved in the back-forward cache" : "leaving"
        );
    });
})();
