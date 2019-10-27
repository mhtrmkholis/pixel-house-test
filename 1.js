function combineSort(a, b) {
  return [...a, ...b].sort((a, b) => a -b);
};
console.log(combineSort([11, 765, 3098], [4, 523, 68, 12, 99]));


