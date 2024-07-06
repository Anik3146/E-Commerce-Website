export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="spinner-border mr-2 text-primary-500 h-10 w-10 sm:h-14 sm:w-14 border-t-6 border-b-4 border-l-4 border-r-1 border-primary-2 rounded-full animate-spin"></div>
      <span className="text-sm sm:text-base">Loading...</span>
    </div>
  );
}
