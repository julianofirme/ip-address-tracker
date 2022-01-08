import axios from "axios";
import { ipData } from "../model";

interface IParams {
  apiKey: string;
  ipAddress: string;
}

const getData = async ({ apiKey, ipAddress }: IParams): Promise<ipData> => {
  const response = await axios.get(
    " https://geo.ipify.org/api/v2/country,city",
    { params: { apiKey, ipAddress } }
  );
  return response.data.location;
};

export { getData };
