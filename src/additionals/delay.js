// utils.js

export const delay = async (navigate, path, delayInMilliseconds) => {
  await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
  navigate(path);
};
