export const calculateReadingMinutes = (content: string): string => {
  const wordsPerMinute = 200;
  content = content.replace(/(<([^>]+)>)/gi, "");
  let textLength = content.split(" ").length;
  if (textLength > 0) {
    var readingMinutes = Math.ceil(textLength / wordsPerMinute);
  }
  return readingMinutes < 2 ? "2" : readingMinutes.toString();
};
