export const userStorage = (user: any) => {
  localStorage.setItem('accessToken', user.accessToken);
  localStorage.setItem('username', user.username);
  localStorage.setItem('_id', user._id);
};
export const getUserName = () => {
  return localStorage.getItem('username');
};
export const clearUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('username');
  localStorage.removeItem('_id');
};
