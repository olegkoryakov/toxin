const GRADIENT_NAMES = ['green', 'yellow', 'purple', 'black'];
// const GRADIENT_NAMES = ['purple', 'yellow', 'green', 'black'];
const GRADIENTS = `
<linearGradient id="${GRADIENT_NAMES[0]}" x1="60" y1="1" x2="60" y2="121" gradientUnits="userSpaceOnUse">
  <stop stop-color="#6FCF97"/>
  <stop offset="1" stop-color="#66D2EA"/>
</linearGradient>
<linearGradient id="${GRADIENT_NAMES[1]}" x1="60" y1="1" x2="60" y2="121" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE39C"/>
  <stop offset="1" stop-color="#FFBA9C"/>
</linearGradient>
<linearGradient id="${GRADIENT_NAMES[2]}" x1="60" y1="1" x2="60" y2="121" gradientUnits="userSpaceOnUse">
  <stop offset="0" style="stop-color:#BC9CFF;" />
  <stop offset="1" style="stop-color:#8BA4F9;" />
</linearGradient>
<linearGradient id="${GRADIENT_NAMES[3]}" x1="5" x1="60" y1="1" x2="60" y2="121" gradientUnits="userSpaceOnUse">
  <stop stop-color="#919191"/>
  <stop offset="1" stop-color="#3D4975"/>
</linearGradient>`;

export { GRADIENTS, GRADIENT_NAMES };
