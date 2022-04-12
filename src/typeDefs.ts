import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        getBook(book_id: String!): Book
    }

    type Mutation {
        addBook(book_id: String!, book_title: String!, pages: Int!, read: Boolean!, progress: Float, author: String!,)
    }
`