const Footer = () => {
  return (
    <div className="bg-green-500 py-10">
      <div className="container max-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          ePijaca.com
        </span>
        <span className="text-white bold tracking-tight flex gap-4">
          <span>Politika privatnosti</span>
          <span>Uvjeti korištenja</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
