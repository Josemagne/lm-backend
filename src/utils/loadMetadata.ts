import lssv from "localpersistence/lssv"

/**
 * 
 * @param refresh Decides if we synchronize metadata.personKey with numberOfPersons
 * @returns 
 */
const loadMetadata = async (numberOfPersons?: number): Promise<Metadata> => {
    const l = new lssv();

    const StandardMetadata: Metadata = {
        firstTimeLoaded: true,
        view: false,
        associationsOption: [],
        firebaseUID: "",
        hasRegistered: false,
        pendingPersons: [],
        isSynchronized: true,
        isLoggedIn: false,
        lastTimeOnline: undefined,
        lastTimeSynchronized: undefined
    }

    let metadata: any;

    try {
        metadata = l.getStorageObject("metadata");
        if (!metadata) {

            metadata = StandardMetadata;

            l.createStorageObject("metadata", metadata).then(() => {
                return metadata
            })
        }

        return metadata;
    }
    catch (err) {
        console.log("Could not create metadata object")
    }


    return metadata;
}

export default loadMetadata;