/**
 * Functions that filters a list to get only the persons with a certain association
 */
const getWithAssociation = (persons: Person[], association: string): Person[] | undefined => {

    let result: Person[] = [];

    result = persons.filter((person) => person.association === association)

    console.log(`filtered persons for ${association}: `, result)
    if (result.length < 1) {
        return persons;
    }
    return result;

}


export default getWithAssociation;