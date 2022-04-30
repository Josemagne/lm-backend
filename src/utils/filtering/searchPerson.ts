/**
 * Searches for persons with certain attributes
 * @param searchTerm The literal attribute of the person
 * @param persons Array of persons we are searching in
 * @param attribute The name of the attribute
 */
const searchPerson = (searchTerm: string, persons: any[] | undefined, attribute?: string): Person[] | undefined => {
    /**
     * Persons with the searched attributes
     */
    let searchedPersons: Person[] = []


    const ATTRIBUTES = ["prename", "name", "region", "associationsOption"]

    if (!persons) return undefined;

    if (attribute) {
        for (let x = 0; x < persons.length; x++) {
            if (contains(searchTerm, persons[x][attribute])) {
                searchedPersons.push(persons[x])
            }
        }
    }

    else {
        for (let i = 0; i < ATTRIBUTES.length; i++) {
            for (let j = 0; j < persons.length; j++) {
                // if (persons[j][ATTRIBUTES[i]] === searchTerm) {
                //     searchedPersons.push(persons[j]);
                // }
                console.log("searchTerm: ", searchTerm, "attribute: ", persons[j][ATTRIBUTES[i]])
                if (contains(searchTerm, persons[j][ATTRIBUTES[i]])) {
                    searchedPersons.push(persons[j])
                    j += 1;
                    continue;
                }
            }
        }
    }

    console.log("for: ", searchTerm)
    console.log("found persons: ", searchedPersons)
    console.log("searchedPersons", searchedPersons)
    return searchedPersons.length < 1 ? undefined : searchedPersons;

}

/**
 * Tests if a substring exists in the attribute of a person
 * @param searchedTermSubString Substring
 * @param personAttribute Attribute of person
 * @returns 
 */
const contains = (searchedTermSubString: string, personAttribute: string): boolean => {
    let result: boolean = false;
    try {
        if (personAttribute.includes(searchedTermSubString)) {
            console.log(searchedTermSubString, " is in ", personAttribute)
            result = true
        }
        else result = false
    }
    catch (err) {
        console.error("The err is: ", err)
    }

    return result;
}

export default searchPerson;