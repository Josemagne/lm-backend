/**
 * Divides the full name of the author
 */
export default function divideAuthor(fullName: string): { author_prename: string; author_name: string; } {
    let author_prename: string = "";
    let author_name: string = "";


    for (let i = 0; i < fullName.length; i++) {
        if (fullName[i] === " ") {
            author_prename = fullName.substring(0, i);
            author_name = fullName.substring(i + 1, fullName.length);
            break;
        }
    }

    return { author_name, author_prename }

}