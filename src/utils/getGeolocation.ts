export const getGeolocation = (succes: PositionCallback) => {
  if (!navigator.geolocation) {
    return;
  }

  navigator.geolocation.getCurrentPosition(succes);
};
