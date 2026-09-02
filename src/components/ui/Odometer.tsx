const DIGITS = '0123456789';

function OdometerDigit({ digit, delay }: { digit: string; delay: number }) {
  const index = DIGITS.indexOf(digit);

  return (
    <span className="inline-block h-[1em] w-[0.6em] overflow-hidden align-baseline leading-none">
      <span
        className="flex flex-col leading-none transition-transform ease-out"
        style={{
          transform: `translateY(-${index}em)`,
          transitionDuration: '3000ms',
          transitionDelay: `${delay}ms`,
        }}
      >
        {DIGITS.split('').map((d) => (
          <span key={d} className="h-[1em] leading-none block">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Odometer({ value }: { value: string }) {
  const chars = value.split('');
  const digitPositions = chars.filter((c) => /\d/.test(c)).length;

  let digitIndexFromRight = 0;

  return (
    <span className="inline-flex">
      {chars.map((char, i) => {
        if (/\d/.test(char)) {
          // count how many digits are to the right of this one (including itself)
          const digitsAfterThis = chars.slice(i).filter((c) => /\d/.test(c)).length;
          const positionFromRight = digitsAfterThis - 1; // 0 = rightmost digit
          const delay = positionFromRight * 120; // rightmost = 0ms, each one left starts 120ms later
          return <OdometerDigit key={i} digit={char} delay={delay} />;
        }
        return (
          <span key={i} className="leading-none">
            {char}
          </span>
        );
      })}
    </span>
  );
}