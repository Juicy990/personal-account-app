import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { UserInterface } from "../models/UserInterface";

export const userApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Post", "Get"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<UserInterface[], number>({
      query: (limit: number = 100) => ({
        url: "/users",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Post"],
    }),

    createUser: build.mutation<UserInterface, UserInterface>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),

    updateUser: build.mutation<UserInterface, UserInterface>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),

    removeUser: build.mutation<UserInterface, UserInterface>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
