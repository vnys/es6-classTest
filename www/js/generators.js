export function* keys(obj) {
    for (let key of Object.keys(obj)) {
        yield key;
    }
}
