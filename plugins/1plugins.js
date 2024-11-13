const plugins = [];

export const registerPlugin = (plugin) => {
  plugins.push(plugin);
};

export const getPlugins = () => plugins;
