import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import IpDataComponent from '.'
import { ipDataContext } from "providers/ipDataProvider";
import { IpData } from "modules/ip-data/model";

const ipDataMock: IpData = {
  ip: '0.0.0.0',
  location: {
    country: 'Test country',
    region: 'Test region',
    city: 'Test city',
    lat: 0,
    lng: 0,
    postalCode: '00000',
    timezone: '00:00',
    geonameId: 0
  }
}

const ipDataContextMock = {
  ipData: ipDataMock,
  setIpAddress: () => {},
  ipAddress: '0.0.0.0'
}

function setup(ipData = ipDataContextMock) {
  render(
    <ipDataContext.Provider value={ ipData }>
      <IpDataComponent />
    </ipDataContext.Provider>
  )
}

describe("Ip Data", () => {
  it("should be display ip data", () => {
    setup();

    const ipDataBox = screen.getByTestId('ip-data')

    expect(ipDataBox).toBeInTheDocument();
    expect(ipDataBox).toHaveStyle({
      background: "#FFF",
      width: "75%",
      height: "150px",
      position: 'relative',
      top: "25%",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
    })
  });

  it("should be display ip data informations", () => {
    setup();

    const ipAddress = screen.getByText('0.0.0.0')
    const cityAndRegion = screen.getByText('Test city, Test region')
    const timezone = screen.getByText('00:00')

    expect(ipAddress).toBeInTheDocument();
    expect(cityAndRegion).toBeInTheDocument();
    expect(timezone).toBeInTheDocument();
  });
});