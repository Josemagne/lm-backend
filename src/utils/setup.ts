import localforage from 'localforage';

const personStore = localforage.createInstance({
    name: "persons",
    storeName: "personStore",
    driver: localforage.INDEXEDDB
})

/**
 * Sets up the environment for the user when he first enters the app
 */
const setup = (): boolean => {
    let result: boolean = false;
    let works: boolean = false
    /**
     * See if personStore exists
     */
    try {
        personStore.setItem("remove", "remove").then((result) => {
            works = true;
        }).catch((err) => {
            works = false;
        })

        if (!works) {
            result = true;
            personStore.removeItem("remove")
        }
        else {
            result = true;
            localforage.removeItem("remove")
        }
    }
    catch {
    }
    return result;
}

// export default setup;