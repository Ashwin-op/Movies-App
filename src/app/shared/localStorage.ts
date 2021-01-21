export function getLocalStorage(): any {
  return JSON.parse(localStorage.getItem('BookmarkedMovies'));
}

export function setLocalStorage(movies: string[]): void {
  localStorage.setItem('BookmarkedMovies', JSON.stringify(movies));
}
