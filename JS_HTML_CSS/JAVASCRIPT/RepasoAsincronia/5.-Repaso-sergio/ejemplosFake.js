// CALLBACKS

const loadDataCB = (url, callback) => {
    setTimeout(() => { // Simula una llamada a una API
        callback(null, `Datos de ${url}`);
    }, 1000);
};

const processDataCB = (data, callback) => {
    setTimeout(() => {
        callback(null, `${data} procesados`);
    }, 500);
};

loadDataCB('api/misdatos', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        processDataCB(data, (error, processedData) => {
            if (error) {
                console.error(error);
            } else {
                console.log(processedData); // 'Datos de api/misdatos procesados'
            }
        });
    }
});



// PROMISES

const loadDataPromise = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Datos de ${url}`);
        }, 1000);
    });
};

const processDataPromise = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${data} procesados`);
        }, 500);
    });
};

loadDataPromise('api/misdatos')
    .then(data => processData(data))
    .then(processedData => console.log(processedData)) // 'Datos de api/misdatos procesados'
    .catch(error => console.error(error));



// ASYNC AWAIT

const handleData = async () => {
    try {
        const data = await loadDataPromise('api/misdatos');
        const processedData = await processDataPromise(data);
        console.log(processedData); // 'Datos de api/misdatos procesados'
    } catch (error) {
        console.error(error);
    }
};

handleData();
