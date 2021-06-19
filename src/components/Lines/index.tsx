const Lines: React.FC = () => {
    return (
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-around">
            <div className="w-full h-1 md:h-full md:w-1 bg-lightLines dark:bg-darkLines opacity-50 z-10"></div>
            <div className="w-full h-1 md:h-full md:w-1 bg-lightLines dark:bg-darkLines opacity-50 z-10"></div>
            <div className="w-full h-1 md:h-full md:w-1 bg-lightLines dark:bg-darkLines opacity-50 z-10 "></div>
            <div className="w-full h-1 md:h-full md:w-1 bg-lightLines dark:bg-darkLines opacity-50 z-10"></div>
        </div>
    );
};
export default Lines;
