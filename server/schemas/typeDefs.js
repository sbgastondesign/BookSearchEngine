const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		bookCount: Int
		savedBook: [Book]
	}

	type Book {
		_id: ID
		title: String
		authors: String
		plantCount: Int
		savedBook: [Book]
		
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		classes: [Class]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		saveBook(bookId: String!): User
		removeBook(bookId: String!): User
	}
`;

module.exports = typeDefs;
