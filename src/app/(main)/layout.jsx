import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import TopInformation from "../components/shared/topInformation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TopInformation></TopInformation>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
