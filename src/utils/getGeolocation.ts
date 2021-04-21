export const getGeolocation = (succes: PositionCallback, error: PositionErrorCallback) => {
  if (!navigator.geolocation) {
    return;
  }

  navigator.geolocation.getCurrentPosition(succes, error);
};
