const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }   
    type Auth {
        token: ID!
        user: User
    }
    type Book {
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }
    input BookInput {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

	type Query {
        me: User
        users: [User]
        user(username: String!): User
    


	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		saveBook(bookData: BookInput!): User
		removeBook(bookId: String!): User
	}
`;

module.exports = typeDefs;


	// * `Query` type:
	// * `me`: Which returns a `User` type.

// * `Mutation` type:
// * `login`: Accepts an email and password as parameters; returns an `Auth` type.
// * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.
// * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)
// * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.