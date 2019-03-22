import config from "./config";

const _setConfig = function(customConfig) {
  Object.keys(customConfig).forEach(key => {
    config[key] = customConfig[key];
  });
};
export const setConfig = _setConfig;

export { default as state } from "./state";

export { default as ofHot } from "./ofHot";

export * from "./distributor";

export { default as ofLast } from "./ofLast";

export * from "./attract";

export * from "./permeate";
