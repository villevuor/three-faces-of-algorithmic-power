const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const moveItem = (arr, fromIndex, toIndex) => {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const mostPopularWithSmallVariance = (tracks) => {
  if (!tracks) return [];

  // Step 1: Order by popularity score
  tracks.sort((a, b) => b.popularity - a.popularity)

  // Step 2: Hide 3-5 items by random from the top 15
  for (let i = 0; i < randomIntFromInterval(3, 5); i++) {
    tracks.splice(randomIntFromInterval(1, 15), 1);
  }

  // Step 2: Move by random 5-10 items from the last 20 tracks to among the tops

  const size = tracks.length;

  for (let i = 0; i < randomIntFromInterval(5, 10); i++) {
    const from = randomIntFromInterval(size - 20, size - 1);
    const to = randomIntFromInterval(0, 12);
    moveItem(tracks, from, to);
  }

  return tracks;
}

const mostSuitableByTags = (tracks, tags) => {
  // Step 1: Order tracks by "points" and take top 20
  tracks.sort((a, b) => {
    const scoreA = a.tags.filter(value => tags.includes(value)).length;
    const scoreB = b.tags.filter(value => tags.includes(value)).length;
    return scoreB - scoreA;
  });

  const top20 = tracks.slice(0, 20);

  // Step 2: remove 5 items by random
  for (let i = 0; i < 5; i++) {
    top20.splice(randomIntFromInterval(1, (20 - i)), 1);
  }

  // Step 3: shuffle results -> this is done on frontend

  return top20;
}

export { shuffle, mostPopularWithSmallVariance, mostSuitableByTags, randomIntFromInterval };