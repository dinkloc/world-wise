import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParam] = useSearchParams();
  const mapLat = searchParam.get("lat");
  const mapLng = searchParam.get("lng");
  return [mapLat, mapLng];
};
