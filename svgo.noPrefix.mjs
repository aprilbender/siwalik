export default {
    // this is the equiv of the --pretty flag, I think
    js2svg: { indent: 2, pretty: true },
    plugins: [
      
        // This version of the config file does not include prefixIds, which is
        // used in most but not all places. Use svgo --config svgo.noPrefix.mjs
      
    ],
  };