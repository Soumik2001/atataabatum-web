type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] z-[102]"
    >
      <span
        className={`block h-[2px] w-6 bg-ice rounded-full transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-[7px]' : ''
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-ice rounded-full transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-ice rounded-full transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-[7px]' : ''
        }`}
      />
    </button>
  );
}