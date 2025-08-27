const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
  size = 20,
  textColor = 'white',     // ✅ base text color
  shineColor = '#D9ECFF',  // ✅ shine color (default: light blue #60a5fa)
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-transparent bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        fontSize: `${size}px`,
        backgroundImage: `linear-gradient(120deg, ${textColor} 40%, ${shineColor} 50%, ${textColor} 60%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;


// tailwind.config.js
// module.exports = {
  // theme: {
  //   extend: {
  //     keyframes: {
  //       shine: {
  //         '0%': { 'background-position': '100%' },
  //         '100%': { 'background-position': '-100%' },
  //       },
  //     },
  //     animation: {
  //       shine: 'shine 5s linear infinite',
  //     },
  //   },
  // },
//   plugins: [],
// };