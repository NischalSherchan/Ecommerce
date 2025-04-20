import { FaStar } from "react-icons/fa";
const ReviewSlide = ({ item }) => (
    <div className="p-4 h-full">
      <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
        <div className="flex flex-col items-center mb-4">
          <img 
            src={item.img} 
            alt={item.userName}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 mb-3"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/placeholder-user.jpg';
            }}
          />
          <h3 className="font-bold text-lg">{item.userName}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-center flex-grow">{item.comment}</p>
        <div className="mt-auto">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                color={i < item.rating ? "#FFD700" : "#C0C0C0"} 
                className="mx-0.5"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center">{item.date}</p>
        </div>
      </div>
    </div>
  );

  export default ReviewSlide