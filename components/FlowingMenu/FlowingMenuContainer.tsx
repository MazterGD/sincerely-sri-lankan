import FlowingMenu from './FlowingMenu'

interface FlowingMenuContainerProps {
    className: string;
  }

const demoItems = [
  { link: '#', text: 'Colombo Central', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Colombo North', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Colombo South', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Kandy', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'USJ', image: 'https://picsum.photos/600/400?random=5' },
  { link: '#', text: 'Ruhuna', image: 'https://picsum.photos/600/400?random=6' },
  { link: '#', text: 'SLIIT', image: 'https://picsum.photos/600/400?random=7' },
  { link: '#', text: 'NIBM', image: 'https://picsum.photos/600/400?random=8' },
  { link: '#', text: 'NSBM', image: 'https://picsum.photos/600/400?random=9' },
  { link: '#', text: 'Rajarata', image: 'https://picsum.photos/600/400?random=10' },
];

export const FlowingMenuContainer: React.FC<FlowingMenuContainerProps> = ({
  className,
}) => {
  return (
<div className={className} style={{ height: '70em', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
);
};