const { gql } = require('apollo-server-express');

//First before do the resolvers.JS
// Schema base on MongoDB schema 
//Exclamation sign is to make mandatory

exports.typeDefs = gql `
      type Employee {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!

      }

      type Query {
          getEmployees: [Employee]
          getEmployeeByID(id: ID!): Employee
          getEmployeeByGender(gender: String!): [Employee]

      }

      type Mutation {
          addEmployee(firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float!): Employee

          updateEmployee(id: String!
                firstname: String!
                lastname: String!
                email: String!
                gender: String!
                city: String!
                designation: String!
                salary: Float!): Employee

          deleteEmployee(id: String!): Employee

          
      }
`