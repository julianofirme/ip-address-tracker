import { ipData } from "modules/ip-data/model";
import { getData } from "modules/ip-data/services";
import { useState, createContext, useEffect, SetStateAction } from "react";

interface dataContext {
  setIpAddress: (_: SetStateAction<string>) => void
  ipData: ipData
}

const defaultIpDataValues = {
    country: "",
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    postalCode: "",
    timezone: "",
    geonameId: 0,
}

const defaultValues: dataContext = {
  setIpAddress: function (_: SetStateAction<string>): void {},
  ipData: defaultIpDataValues
}

export const ipDataContext = createContext(defaultValues)

const IpDataProvider = (props: any) => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [ipData, setIpData] = useState<ipData>(defaultIpDataValues);

  useEffect(() => {
    (async () => {
      try {
        const params = {
          apiKey: `${process.env.REACT_APP_IP_GEOLOCATION_API_KEY}`,
          ipAddress: ipAddress,
        };
        const data = await getData(params);
        setIpData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [ipAddress]);

  return (
    <ipDataContext.Provider 
      value={{
        setIpAddress,
        ipData
      }}
    >
      {props.children}
    </ipDataContext.Provider>
  )
};

export default IpDataProvider;
