import ThemeToggle from './ThemeToggle';
import { FaBars } from 'react-icons/fa';

interface MobileHeaderProps {
  onMenuClick: () => void;
  name: string;
}

const MobileHeader = ({ onMenuClick, name }: MobileHeaderProps) => {
  return (
    <header className="lg:hidden bg-white dark:bg-gray-800 fixed top-0 left-0 right-0 z-10 shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button 
            aria-label="Open menu"
            onClick={onMenuClick} 
            className="mr-3 text-gray-600 dark:text-gray-300"
          >
            <FaBars className="text-xl" />
          </button>
          <h1 className="text-lg font-bold flex items-center">
            {name || 'Portfolio'}
            <img src="/assets/indian-flag.svg" alt="Indian Flag" className="w-5 h-4 ml-2" />
          </h1>
        </div>
        <ThemeToggle mobile />
      </div>
    </header>
  );
};

export default MobileHeader;
