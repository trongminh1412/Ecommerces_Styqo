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

      // step2
      // async authorize(credentials, req) {
      //   axios
      //     .post("https://dev-api.7hit.com/api/login", {
      //       username: "johoje39511@videour.com",
      //       password: "12345678",
      //     })
      //     .then(function (response) {
      //       console.log(response);
      //       return user.data;
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // try {
      //   const user = await axios.post("https://dev-api.7hit.com/api/login");
      //   if (user) {
      //     console.log(user);
      //     return user.data;
      //   } else {
      //     return null;
      //   }
      // } catch (e) {
      //   throw new Error("There was an error on user authentication");
      // }
      // const res = await fetch(
      //   "https://61c0387333f24c00178231c2.mockapi.io/login",
      //   {
      //     method: "Post",
      //     body: JSON.stringify(credentials),
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      // const user = await res.json();
      // if (res.ok && user) {
      //   return user;
      // }
      // return null;
      // },
      // https://61c0387333f24c00178231c2.mockapi.io/login
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
