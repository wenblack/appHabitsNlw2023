module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin"
    ],
=======
    plugins: ["nativewind/babel"],
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
  };
};
