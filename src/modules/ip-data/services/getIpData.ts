import axios from "axios";

interface IParams {
  apiKey: string;
  ipAddress: string;
}

const getData = async ({ apiKey, ipAddress }: IParams) => {
  const response = await axios.get(
    " https://geo.ipify.org/api/v2/country,city",
    { params: { apiKey, ipAddress } }
  );
  return response.data
};

export { getData };
