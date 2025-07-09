import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const saved = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#Fff" />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </View>
  );
};

export default saved;

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Dimensions,
// } from 'react-native';

// // You would typically import SVG icons from a library like 'react-native-svg'
// // For simplicity, we'll use basic Text placeholders for icons here.
// // If you want to use SVG, you'd need to install 'react-native-svg' and
// // convert your SVG paths into <Svg> and <Path> components.
// // Example: import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');

// // Helper function to calculate item width for responsive grid
// const getItemWidth = (numColumns) => {
//   const padding = 16; // Corresponds to p-4 (16px)
//   const gap = 16; // Corresponds to gap-4 (16px)
//   const totalHorizontalPadding = padding * 2;
//   const totalGap = (numColumns - 1) * gap;
//   return (width - totalHorizontalPadding - totalGap) / numColumns;
// };

// // Main App Component
// const App = () => {
//   const [savedMovies, setSavedMovies] = useState([
//     {
//       id: '1',
//       title: '28 Years Later',
//       year: '2025',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=28+Years+Later',
//     },
//     {
//       id: '2',
//       title: 'Spider-Man: No Way Home',
//       year: '2021',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Spider-Man',
//     },
//     {
//       id: '3',
//       title: 'Dune: Part Two',
//       year: '2024',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Dune+Part+Two',
//     },
//     {
//       id: '4',
//       title: 'The Matrix Resurrections',
//       year: '2021',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Matrix',
//     },
//     {
//       id: '5',
//       title: 'Inception',
//       year: '2010',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Inception',
//     },
//     {
//       id: '6',
//       title: 'Interstellar',
//       year: '2014',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Interstellar',
//     },
//     {
//       id: '7',
//       title: 'Avatar: The Way of Water',
//       year: '2022',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Avatar+2',
//     },
//     {
//       id: '8',
//       title: 'Guardians of the Galaxy Vol. 3',
//       year: '2023',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Guardians+3',
//     },
//   ]);

//   /**
//    * Removes a movie from the saved list.
//    * @param {string} movieId - The ID of the movie to remove.
//    */
//   const removeMovie = (movieId) => {
//     setSavedMovies((prevMovies) =>
//       prevMovies.filter((movie) => movie.id !== movieId)
//     );
//   };

//   /**
//    * Renders a single movie card item for the FlatList.
//    * @param {object} item - The movie object.
//    */
//   const renderMovieItem = ({ item }) => (
//     <View style={styles.movieCard}>
//       <Image source={{ uri: item.poster }} style={styles.moviePoster} />
//       <View style={styles.movieInfo}>
//         <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode="tail">
//           {item.title}
//         </Text>
//         <Text style={styles.movieYear}>{item.year}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.removeButton}
//         onPress={() => removeMovie(item.id)}
//         accessibilityLabel={`Remove ${item.title}`}
//       >
//         {/* Replace with an actual SVG icon component if react-native-svg is used */}
//         <Text style={styles.removeButtonIcon}>✕</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Saved</Text>
//         <TouchableOpacity style={styles.headerButton}>
//           {/* Replace with an actual SVG icon component if react-native-svg is used */}
//           <Text style={styles.headerButtonIcon}>⋮</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Main Content Area */}
//       {savedMovies.length === 0 ? (
//         <View style={styles.emptyState}>
//           {/* Replace with an actual SVG icon component if react-native-svg is used */}
//           <Text style={styles.emptyStateIcon}>🔖</Text>
//           <Text style={styles.emptyStateText}>Nothing saved yet.</Text>
//           <Text style={styles.emptyStateSubtext}>
//             Find movies and shows you love and save them here!
//           </Text>
//         </View>
//       ) : (
//         <FlatList
//           data={savedMovies}
//           renderItem={renderMovieItem}
//           keyExtractor={(item) => item.id}
//           numColumns={2} // Default for small screens (col-2)
//           contentContainerStyle={styles.gridContainer}
//           columnWrapperStyle={styles.columnWrapper}
//           // Adjust numColumns based on screen width for responsiveness (simulated)
//           // In a real app, you might use useWindowDimensions hook for more dynamic updates
//           // For simplicity, we'll fix it to 2 for mobile-first
//           // You can add logic here: numColumns={width > 768 ? 5 : width > 640 ? 4 : width > 480 ? 3 : 2}
//         />
//       )}

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>🏠</Text>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>🔍</Text>
//           <Text style={styles.navText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
//           <Text style={[styles.navIcon, styles.navIconActive]}>🔖</Text>
//           <Text style={[styles.navText, styles.navTextActive]}>Saved</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>👤</Text>
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Dimensions,
// } from 'react-native';

// // You would typically import SVG icons from a library like 'react-native-svg'
// // For simplicity, we'll use basic Text placeholders for icons here.
// // If you want to use SVG, you'd need to install 'react-native-svg' and
// // convert your SVG paths into <Svg> and <Path> components.
// // Example: import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');

// // Helper function to calculate item width for responsive grid
// const getItemWidth = (numColumns) => {
//   const padding = 16; // Corresponds to p-4 (16px)
//   const gap = 16; // Corresponds to gap-4 (16px)
//   const totalHorizontalPadding = padding * 2;
//   const totalGap = (numColumns - 1) * gap;
//   return (width - totalHorizontalPadding - totalGap) / numColumns;
// };

// // Main App Component
// const App = () => {
//   const [savedMovies, setSavedMovies] = useState([
//     {
//       id: '1',
//       title: '28 Years Later',
//       year: '2025',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=28+Years+Later',
//     },
//     {
//       id: '2',
//       title: 'Spider-Man: No Way Home',
//       year: '2021',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Spider-Man',
//     },
//     {
//       id: '3',
//       title: 'Dune: Part Two',
//       year: '2024',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Dune+Part+Two',
//     },
//     {
//       id: '4',
//       title: 'The Matrix Resurrections',
//       year: '2021',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Matrix',
//     },
//     {
//       id: '5',
//       title: 'Inception',
//       year: '2010',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Inception',
//     },
//     {
//       id: '6',
//       title: 'Interstellar',
//       year: '2014',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Interstellar',
//     },
//     {
//       id: '7',
//       title: 'Avatar: The Way of Water',
//       year: '2022',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Avatar+2',
//     },
//     {
//       id: '8',
//       title: 'Guardians of the Galaxy Vol. 3',
//       year: '2023',
//       poster: 'https://placehold.co/150x225/3a1c71/e0e0e0?text=Guardians+3',
//     },
//   ]);

//   /**
//    * Removes a movie from the saved list.
//    * @param {string} movieId - The ID of the movie to remove.
//    */
//   const removeMovie = (movieId) => {
//     setSavedMovies((prevMovies) =>
//       prevMovies.filter((movie) => movie.id !== movieId)
//     );
//   };

//   /**
//    * Renders a single movie card item for the FlatList.
//    * @param {object} item - The movie object.
//    */
//   const renderMovieItem = ({ item }) => (
//     <View style={styles.movieCard}>
//       <Image source={{ uri: item.poster }} style={styles.moviePoster} />
//       <View style={styles.movieInfo}>
//         <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode="tail">
//           {item.title}
//         </Text>
//         <Text style={styles.movieYear}>{item.year}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.removeButton}
//         onPress={() => removeMovie(item.id)}
//         accessibilityLabel={`Remove ${item.title}`}
//       >
//         {/* Replace with an actual SVG icon component if react-native-svg is used */}
//         <Text style={styles.removeButtonIcon}>✕</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Saved</Text>
//         <TouchableOpacity style={styles.headerButton}>
//           {/* Replace with an actual SVG icon component if react-native-svg is used */}
//           <Text style={styles.headerButtonIcon}>⋮</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Main Content Area */}
//       {savedMovies.length === 0 ? (
//         <View style={styles.emptyState}>
//           {/* Replace with an actual SVG icon component if react-native-svg is used */}
//           <Text style={styles.emptyStateIcon}>🔖</Text>
//           <Text style={styles.emptyStateText}>Nothing saved yet.</Text>
//           <Text style={styles.emptyStateSubtext}>
//             Find movies and shows you love and save them here!
//           </Text>
//         </View>
//       ) : (
//         <FlatList
//           data={savedMovies}
//           renderItem={renderMovieItem}
//           keyExtractor={(item) => item.id}
//           numColumns={2} // Default for small screens (col-2)
//           contentContainerStyle={styles.gridContainer}
//           columnWrapperStyle={styles.columnWrapper}
//           // Adjust numColumns based on screen width for responsiveness (simulated)
//           // In a real app, you might use useWindowDimensions hook for more dynamic updates
//           // For simplicity, we'll fix it to 2 for mobile-first
//           // You can add logic here: numColumns={width > 768 ? 5 : width > 640 ? 4 : width > 480 ? 3 : 2}
//         />
//       )}

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>🏠</Text>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>🔍</Text>
//           <Text style={styles.navText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
//           <Text style={[styles.navIcon, styles.navIconActive]}>🔖</Text>
//           <Text style={[styles.navText, styles.navTextActive]}>Saved</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>👤</Text>
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// // StyleSheet for React Native components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a2e', // bg-[#1a1a2e]
//     color: '#e0e0e0', // text-gray-100 (simulated by individual text styles)
//   },
//   header: {
//     padding: 16, // p-4
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontSize: 24, // text-2xl
//     fontWeight: 'bold',
//     color: '#e0e0e0',
//   },
//   headerButton: {
//     padding: 8, // Adjust as needed for touch target
//   },
//   headerButtonIcon: {
//     fontSize: 24, // h-6 w-6
//     color: '#9ca3af', // text-gray-400
//   },
//   gridContainer: {
//     padding: 16, // p-4
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//     marginBottom: 16, // gap-4 (between rows)
//   },
//   movieCard: {
//     backgroundColor: '#2a2a4a', // bg-[#2a2a4a]
//     borderRadius: 8, // rounded-lg
//     overflow: 'hidden',
//     shadowColor: '#000', // shadow-lg
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     width: getItemWidth(2), // For 2 columns
//     marginBottom: 16, // gap-4 (between cards in a column)
//     marginHorizontal: 8, // Half of gap-4 for spacing between columns
//     position: 'relative',
//   },
//   moviePoster: {
//     width: '100%',
//     aspectRatio: 150 / 225, // Maintain aspect ratio
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   movieInfo: {
//     padding: 12, // p-3 (adjusted slightly for better mobile padding)
//   },
//   movieTitle: {
//     fontSize: 14, // text-sm
//     fontWeight: '600', // font-semibold
//     color: '#e0e0e0',
//   },
//   movieYear: {
//     fontSize: 12, // text-xs
//     color: '#9ca3af', // text-gray-400
//     marginTop: 4, // mt-1
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 8, // top-2
//     right: 8, // right-2
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // bg-black bg-opacity-70
//     borderRadius: 9999, // rounded-full
//     padding: 6, // p-1.5
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   removeButtonIcon: {
//     color: '#fff', // text-white
//     fontSize: 12, // h-4 w-4 (adjust size for 'x' character)
//     fontWeight: 'bold',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 80, // py-20
//   },
//   emptyStateIcon: {
//     fontSize: 96, // h-24 w-24
//     color: '#525252', // text-gray-600
//     marginBottom: 16, // mb-4
//   },
//   emptyStateText: {
//     color: '#9ca3af', // text-gray-400
//     fontSize: 18, // text-lg
//   },
//   emptyStateSubtext: {
//     color: '#6b7280', // text-gray-500
//     fontSize: 14, // text-sm
//     marginTop: 8, // mt-2
//   },
//   bottomNav: {
//     backgroundColor: '#1f1f3a', // bg-[#1f1f3a]
//     paddingVertical: 8, // p-2
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopLeftRadius: 24, // rounded-t-3xl
//     borderTopRightRadius: 24, // rounded-t-3xl
//     shadowColor: '#000', // shadow-lg
//     shadowOffset: { width: 0, height: -4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 8,
//   },
//   navItem: {
//     flex: 1, // Distribute space evenly
//     alignItems: 'center',
//     paddingVertical: 8, // p-2
//     borderRadius: 9999, // rounded-full
//     marginHorizontal: 4, // Small margin for spacing
//   },
//   navItemActive: {
//     backgroundColor: '#3a1c71', // bg-[#3a1c71]
//   },
//   navIcon: {
//     fontSize: 24, // h-6 w-6
//     color: '#9ca3af', // text-gray-400
//   },
//   navIconActive: {
//     color: '#a78bfa', // text-purple-400
//   },
//   navText: {
//     fontSize: 10, // text-xs
//     color: '#9ca3af', // text-gray-400
//     marginTop: 4, // mt-1
//   },
//   navTextActive: {
//     color: '#a78bfa', // text-purple-400
//   },
// });

// export default App;
