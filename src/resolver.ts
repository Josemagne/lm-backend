import { LM_Book } from 'src/types/Book/book';
import { getBook as _getBook } from './controllers/book.controller';
import Book from './entity/Book';
import { getRepository } from 'typeorm';
export const resolvers = {
    Query: {
        getBook: async (_: any, args: any) => {
            const { book_id } = args;

            return await getRepository(Book).findOne(book_id);
        }
    },
    Mutation: {
        updateBook: async (_: any, args: Book) => {
            const updatedBook = { ...args };

            try {
                await getRepository(Book).createQueryBuilder().update(Book).set({ ...updatedBook }).where("book_id = :book_id", { book_id: updatedBook.book_id }).execute()

                return true;
            }

            catch (err) {
                return false;
            }


        }
    }


}