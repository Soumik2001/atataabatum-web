import { Link, useLocation } from 'react-router';

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Markets', path: '/markets' },
    { label: 'Trade', path: '/trade' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Research', path: '/research' },
  ];

  return (
    <header className="bg-d-blue">
      <div className="max-w-[1440px] mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-ice/80 hover:text-ice transition-all duration-300 text-xl font-semibold">
            ATATAABATUM
          </Link>
          <span className="text-ice/80">|</span>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-lg after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-ice after:transition-all after:duration-300
                  ${isActive ? 'text-ice after:w-full' : 'text-ice/80 hover:text-ice after:w-0 hover:after:w-full'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};