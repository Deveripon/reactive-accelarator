import internetImage from '@/public/Internet.svg';
import Image from 'next/image';
const Internet = () => {
    return (
        <Image src={internetImage} height={600} width={600} alt='Internet' />
    );
};

export default Internet;

