
const CardInfoSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="border-dark-200 bg-dark-50 p-4 border rounded-xl w-[600px] animate-pulse">
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-200 mb-4 rounded-md h-12" />
          <div className="bg-gray-200 mb-2 rounded-md h-4" />
          <div className="bg-gray-200 mb-2 rounded-md h-4" />
          <div className="bg-gray-200 mb-2 rounded-md h-4" />
          <div className="bg-gray-200 mb-2 rounded-md h-4" />
        </div>
        <hr className="bg-gray-200 my-4 rounded-md h-1" />
        <div className="bg-gray-200 mb-4 rounded-md h-12" />
        <hr className="bg-gray-200 my-4 rounded-md h-1" />
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
        </div>
        <hr className="bg-gray-200 my-4 rounded-md h-1" />
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
        </div>
        <hr className="bg-gray-200 my-4 rounded-md h-1" />
        <div className="flex flex-col gap-y-4">
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
          <div className="bg-gray-200 rounded-md h-10" />
        </div>
      </div>
    </div>
  );
};

export default CardInfoSkeleton;