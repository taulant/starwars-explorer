export const getId = (url) => {
  const urlArray = url.split("/");
  const id = urlArray[urlArray.length - 2];
  return id;
};
