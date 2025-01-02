import React, { Suspense } from "react";
import { Fragment } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/privacy_policy.webp";
import Loader from "../../components/Loader/loader";

const Footer = React.lazy(() => import("../../components/footer"));
const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const PrivacyPolicy = React.lazy(() =>
  import("../../components/PrivacyPolicy")
);

const MainPrivacyPolicy = () => {
  return (
    <Fragment>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle PageTitle={"Privacy Policy"} pageImg={bg} />
        <PrivacyPolicy />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default MainPrivacyPolicy;
