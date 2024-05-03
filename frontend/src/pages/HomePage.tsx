import landingImage from "../assets/landing.jpg";
import appDownloadImage from "../assets/appDownload.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div
        className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center
            -mt-16"
      >
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Opustite se uz zdravu ishranu
        </h1>
        <span className="text-xl">
          Hrana sa sela je samo klik udaljena od Vas!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Dobij zdravu hranu na adresu prije brze!
          </span>
          <span>
            Preuzmite našu aplikaciju za bržu narudžbu i personalizovane
            preporuke.
          </span>
          <img src={appDownloadImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
