module.exports = promise =>
    promise
        .then((data) => {
            return [null, data];
        })
        .catch(err => [err]);



















