import { FaEye } from 'react-icons/fa';

interface VisitorCounterProps {
  count: number;
}

const VisitorCounter = ({ count }: VisitorCounterProps) => {
  return (
    <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex justify-center">
      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
        <FaEye className="mr-2" />
        <span className="font-medium">Visitors:</span>
        <span className="ml-1 font-bold">
          {count ? count.toLocaleString() : "..."}
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;
