describe('object lifecycle project', function () {
    let instance;

    beforeEach(function () {
        instance = new ObjectLifecycle('Test worker');
    });

    it('starts in the created state', function () {
        expect(instance.state).toBe('created');
    });

    it('supports initialize, start, stop, restart, and destroy', function () {
        instance.initialize();
        expect(instance.state).toBe('initialized');

        instance.start();
        expect(instance.state).toBe('running');

        instance.stop();
        expect(instance.state).toBe('stopped');

        instance.start();
        expect(instance.state).toBe('running');

        instance.stop();
        instance.destroy();
        expect(instance.state).toBe('destroyed');
    });

    it('throws when a transition is not allowed', function () {
        expect(function () {
            instance.start();
        }).toThrowError();
    });

    it('cannot start after being destroyed', function () {
        instance.initialize();
        instance.destroy();

        expect(function () {
            instance.start();
        }).toThrowError();
    });
});

describe('page lifecycle project', function () {
    function getEventList() {
        const heading = Array.from(document.querySelectorAll('h1')).find(
            function (element) {
                return element.textContent === 'JavaScript page lifecycle';
            }
        );

        return heading && heading.parentElement.querySelector('ol');
    }

    it('adds a lifecycle panel after the DOM is ready', function () {
        const eventList = getEventList();

        expect(eventList).not.toBeNull();
        expect(eventList.textContent).toContain('DOM ready');
    });

    it('logs visibility and page show/hide events', function () {
        const eventList = getEventList();

        document.dispatchEvent(new Event('visibilitychange'));
        window.dispatchEvent(new Event('pageshow'));
        window.dispatchEvent(new Event('pagehide'));

        expect(eventList.textContent).toContain('Visibility changed');
        expect(eventList.textContent).toContain('Page shown');
        expect(eventList.textContent).toContain('Page hidden');
    });
});
