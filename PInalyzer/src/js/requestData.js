export function requestLight(callback) {
    $.post('localhost:3000/light', (data) => callback(data));
}

export function requestDezibel(callback) {
    $.post('localhost:3000/dezibel', (data) => callback(data));
}

export function requestButton(callback) {
    $.post('localhost:3000/button', (data) => callback(data));
}

export function requestTemp(callback) {
    $.post('localhost:3000/temp', (data) => callback(data));
}