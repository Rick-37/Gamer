//Base URL
const base_url = "https://api.rawg.io/api/";
const API_key = process.env.REACT_APP_RAWG_API;
//get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//get date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//get d/m/y
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//genera gameinfo
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () =>
  `${base_url}${popular_games}&tags=24&key=${API_key}`;
export const upcomingGamesURL = () =>
  `${base_url}${upcoming_games}&tags=24&key=${API_key}`;
export const newGamesURL = () =>
  `${base_url}${newGames}&tags=24&key=${API_key}`;
//Specific details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${API_key}`;
//Game SS
export const gameSSURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_key}`;

//Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=6&key=${API_key}`;
