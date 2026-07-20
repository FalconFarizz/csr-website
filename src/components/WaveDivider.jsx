/**
 * WaveDivider — SVG wave that smoothly transitions between section backgrounds.
 * Props:
 *   topColor    — fill color of the section above
 *   bottomColor — fill color of the section below (becomes the wave fill)
 *   flip        — if true, flip the wave vertically
 *   height      — wave height in px (default 80)
 */
export default function WaveDivider({ topColor = '#071320', bottomColor = '#0B1F45', flip = false, height = 80 }) {
  return (
    <div style={{
      position: 'relative',
      height: height,
      background: topColor,
      overflow: 'hidden',
      marginBottom: -1,
    }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: flip ? 'scaleY(-1)' : 'none',
        }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
