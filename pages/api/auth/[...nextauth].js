import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },

      // *step1
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "johoje39511@videour.com" &&
          credentials.password === "12345678"
        ) {
          return {
            id: 1,
            name: "theanh",
            email: "jjohoje39511@videour.com",
          };
        }

        // login failed
        return null;
      },

      // *step2
      // async authorize(credentials) {
      //   const user = {
      //     name: "johoje39511@videour.com",
      //     password: "12345678",
      //   };
      //   return user;
      // },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  // pages: {
  //   signIn: "/auth/login",
  // },
});
