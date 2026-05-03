import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import HowitWorks from "../components/shared/HowitWorks";
import Navbar from "../components/shared/Navbar";
import Services from "../components/shared/Services";
import TopInformation from "../components/shared/topInformation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TopInformation></TopInformation>
      {children}
      <HowitWorks></HowitWorks>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
