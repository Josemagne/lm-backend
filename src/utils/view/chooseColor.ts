/**
 * Decides what color to pick for the background
 * @param sympathy Number between 0 and 100
 */
const chooseColor = (sympathy: number): number => {
    /**
     * The degree of alpha in rgba()
     */
    let result: number = 0.5;

    /* RED */
    if (sympathy > 50) {

        result = sympathy * 0.01;
    }


    /* GREEN */
    else {

        result = 1 - sympathy * 0.01;
    }

    return result;
}

export default chooseColor;