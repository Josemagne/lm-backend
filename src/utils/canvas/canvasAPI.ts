import Dexie, { Table } from "dexie";

class PersonDB extends Dexie {
    public personStore!: Table<Person, string>;

    public constructor() {
        super("persons");
        this.version(1).stores({
            personStore: "",
        });
    }
}

const personsDB = new PersonDB();

class canvasAPI {


    public static setCoordinates = async (id: string, coordinates: { x: number, y: number }): Promise<boolean> => {
        let result: boolean = false;

        await personsDB.personStore.update(id, { x_position: coordinates.x, y_position: coordinates.y }).then((res) => {
            if (res) result = true;
        })
        return result;
    }

}

export default canvasAPI;