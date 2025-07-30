import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthenticatedUser } from "./users";

// ✅ Mutation: Toggle movie bookmark
export const toggleBookmark = mutation({
  args: {
    tmdbId: v.number(),
    title: v.string(),
    posterPath: v.string(),
    releaseDate: v.string(),
    overview: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUser = await getAuthenticatedUser(ctx);

    // Step 1: Try to find the movie by tmdbId
    let movie = await ctx.db
      .query("movies")
      .withIndex("by_tmdbId", (q) => q.eq("tmdbId", args.tmdbId))
      .first();

    // Step 2: If not found, insert it and fetch it again safely
    if (!movie) {
      const movieId = await ctx.db.insert("movies", {
        title: args.title,
        tmdbId: args.tmdbId,
        posterPath: args.posterPath,
        releaseDate: args.releaseDate,
        overview: args.overview,
      });

      movie = await ctx.db.get(movieId);
      if (!movie) throw new Error("Movie creation failed unexpectedly.");
    }

    // Step 3: Check if this user already bookmarked the movie
    const existing = await ctx.db
      .query("bookmarks")
      .withIndex("by_user", (q) =>
        q.eq("userId", currentUser._id).eq("movieId", movie._id)
      )
      .first();

    // Step 4: Toggle bookmark
    if (existing) {
      await ctx.db.delete(existing._id);
      return false;
    } else {
      await ctx.db.insert("bookmarks", {
        userId: currentUser._id,
        movieId: movie._id,
      });
      return true;
    }
  },
});

// ✅ Query: Get all bookmarked movies for the logged-in user
export const getBookmarkedMovies = query({
  handler: async (ctx) => {
    const currentUser = await getAuthenticatedUser(ctx);

    const bookmarks = await ctx.db
      .query("bookmarks")
      .withIndex("by_user", (q) => q.eq("userId", currentUser._id))
      .order("desc")
      .collect();

    const movies = await Promise.all(
      bookmarks.map(async (bookmark) => {
        const movie = await ctx.db.get(bookmark.movieId);
        return movie;
      })
    );

    return movies.filter(Boolean); // remove nulls just in case
  },
});
