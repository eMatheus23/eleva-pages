const getViewerStatus = () => {
  const checkIsLoggedIn = localStorage.getItem('@elevagro-app/viewer-status');

  if (checkIsLoggedIn) {
    return checkIsLoggedIn;
  }

  localStorage.setItem('@elevagro-app/viewer-status', 'visit');

  return 'visit';
};

export default getViewerStatus;
