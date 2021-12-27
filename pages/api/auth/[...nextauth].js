import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";
import { getSession } from "next-auth";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": `application/json`,
  },
});
// console.log("API", httpClient.defaults);

httpClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers["Authorization"] = `Bearer ${session?.accessToken}`;
  return config;
});

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch("logout");
      router.push("/login");
    }
    return Promise.reject(error.response.data);
  }
);
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

      // step2
      async authorize(credentials, req) {
        // const user = await axios
        //   .get("https://dev-api.7hit.com/api/login", {
        //     username: "johoje39511@videour.com",
        //     password: "12345678",
        //   })
        //   .then(function (response) {
        //     console.log(user.data);
        //     return user.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        try {
          if (
            credentials.username === "johoje39511@videour.com" &&
            credentials.password === "12345678"
          ) {
            const user = {
              id: 1,
              name: "the anh",
              email: "johoje39511@videour.com",
            };
            if (user) {
              console.log(user);
              return user;
            } else {
              return null;
            }
          }
        } catch (e) {
          throw new Error("There was an error on user authentication");
        }
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
      },
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
