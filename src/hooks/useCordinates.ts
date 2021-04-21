import { useEffect, useState } from "react";
import { StorageKeys } from "../enums/storageKeys.enum";
import { Cordinates } from "../types/cordinates.types";
import { Status } from "../types/status.type";
import { getGeolocation } from "../utils/getGeolocation";
import { useEffectAfterMount } from "./useEffectAfterMount";
import { useLocalStorage } from "./useLocalStorage";

export const useCordinates = (location: string) => {
  const [cords, setCords] = useLocalStorage(StorageKeys.Cordinates ,{} as Cordinates)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const getCords = (position: GeolocationPosition) => {
    setCords({ lat: position.coords.latitude, lang: position.coords.longitude });
    setStatus('success');
  };

  const setError = () => {
    setStatus('error');
    setErrorMessage("We couldn't get your location, try searching")
  }

  useEffectAfterMount(() => {
    if(status !== "idle") {
      setStatus('idle');
      setErrorMessage('');
    }
  },[location])

  useEffect(() => {
    if(!!cords.lat || !!location) return
    setStatus('loading')
    getGeolocation(getCords, setError)
  }, [])


  return { cords, status, errorMessage };
}