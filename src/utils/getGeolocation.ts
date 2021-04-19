export const getGeolocation = (cb: PositionCallback) => {
  if (!navigator.geolocation) {
    return;
  }

  navigator.geolocation.getCurrentPosition(cb);
};
