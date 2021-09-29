module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": [
          { "@utils": "./src/utils/" },
          { "@screens": "./src/screens/" }
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ]
  ]
};
