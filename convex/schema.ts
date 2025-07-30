// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   users: defineTable({
//     username: v.string(),
//     fullname: v.string(),
//     email: v.string(),
//     image: v.string(),
//     clerkId: v.string(),
//   }).index("by_clerk_id", ["clerkId"]),

//   bookmarks: defineTable({
//     userId: v.id("users"),
//   }).index("by_user", ["userId"]),
// });

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Clerk users table
  users: defineTable({
    username: v.string(),
    fullname: v.string(),
    email: v.string(),
    image: v.string(),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  // Movies table for TMDB movie info
  movies: defineTable({
    title: v.string(),
    tmdbId: v.number(),
    posterPath: v.string(),
    releaseDate: v.string(),
    overview: v.string(),
  }).index("by_tmdbId", ["tmdbId"]),

  // Bookmarks table to relate user to a movie
  bookmarks: defineTable({
    userId: v.id("users"),
    movieId: v.id("movies"),
  }).index("by_user", ["userId", "movieId"]),
});
