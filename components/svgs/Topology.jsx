import TopologyImage from '@/public/topology.jpg';
import Image from 'next/image';
const Topology = () => {
    return (
        <Image src={TopologyImage} height={600} width={600} alt='Topology' />
    );
};

export default Topology;

