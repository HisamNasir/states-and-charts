import { useLayoutEffect, useState } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth)}, []);
  return (
    <div>
      <p> {width} pixels</p>
    </div>
  );
};

export default LayoutEffectComponent;