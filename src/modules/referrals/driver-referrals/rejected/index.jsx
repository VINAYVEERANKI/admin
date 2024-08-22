import React from "react";
import { useLocation, useParams } from "react-router";
import DriverReferralDetails from "../../../../components/referrals/driverReferrals/driverReferralDetails";

const RejectedDriverRef = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <>
      <DriverReferralDetails params={params?.id} location={location} />
    </>
  );
};

export default RejectedDriverRef;