import Body from '../components/Body';
import dynamic from 'next/dynamic';
const NOSSRImage = dynamic(() => import('../components/Image'), {
  ssr: false,
});

function UnknownComponent({ component }) {
  return <div>[unknown component: {component.type}]</div>;
}

export default function resolveRenderer({ type }) {
  switch (type) {
    case 'defaultBody':
      return Body;
      break;
    case 'image':
      return NOSSRImage;
      break;
    default:
      return UnknownComponent;
  }
}