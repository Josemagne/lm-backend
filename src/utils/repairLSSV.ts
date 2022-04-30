import lssv from "localpersistence/lssv"

/**
 * Synchronizes the localStorage with indexedDB metadata
 */
const repairLSSV = (persons: Person[]) => {
    const l = new lssv()

    const metadata = l.getStorageObject("metadata");

    /* Collect Data */

    // Get the associations options
    for (let i = 0; i < persons.length; i++) {

    }

    // Get the regions options 
    for (let j = 0; j < persons.length; j++) {

    }

    /* Reduce the personKey */


}