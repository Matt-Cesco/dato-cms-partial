import LandingPageRecord from "./LandingPageRecord";
import SecondSectionRecord from "./SecondSectionRecord";
import ThirdSectionRecord from "./ThirdSectionRecord";

const HomeSection = ({details}) => {
  if (details.__typename === "LandingPageRecord") {
    return <LandingPageRecord details={details} />;
  } else if (details.__typename === "SecondSectionRecord") {
    return <SecondSectionRecord details={details} />;
  } else if (details.__typename === "ThirdSectionRecord") {
    return <ThirdSectionRecord details={details} />;
  }
  return (
    <></>
  )
}

export default HomeSection