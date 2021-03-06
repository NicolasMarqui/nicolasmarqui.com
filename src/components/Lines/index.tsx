const Lines: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-around">
      <div className="w-full h-1 md:h-full md:w-1 bg-darkLines opacity-50 z-10 relative"></div>
      <div className="w-full h-1 md:h-full md:w-1 bg-darkLines opacity-50 z-10 relative"></div>
      <div className="w-full h-1 md:h-full md:w-1 bg-darkLines opacity-50 z-10 relative "></div>
      <div className="w-full h-1 md:h-full md:w-1 bg-darkLines opacity-50 z-10 relative"></div>
    </div>
  );
};
export default Lines;
