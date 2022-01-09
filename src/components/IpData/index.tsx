import React, { useContext } from "react";
import { ipDataContext } from "providers/ipDataProvider";

function IpData() {
  const { ipData } = useContext(ipDataContext)
  console.log("🚀 ~ ipData", ipData)

  return <></>;
};

export default IpData;
