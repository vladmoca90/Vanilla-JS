window.withObjectScript = function (scriptPath, assertions) {
    return new Promise(function (resolve, reject) {
        const frame = document.createElement('iframe');
        frame.style.display = 'none';

        frame.onload = function () {
            try {
                resolve(assertions(function (expression) {
                    return frame.contentWindow.eval(expression);
                }));
            } catch (error) {
                reject(error);
            } finally {
                frame.remove();
            }
        };
        frame.onerror = function () {
            frame.remove();
            reject(new Error('Unable to load object script: ' + scriptPath));
        };
        frame.srcdoc = '<script src="../scripts/Objects/' + scriptPath + '"><\/script>';
        document.body.appendChild(frame);
    });
};
