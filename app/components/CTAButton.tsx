import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';

type Props = {
    text: string;
    whereTo: string; 
};

const CTAButton = ({ text, whereTo }: Props) => {


    return (
        <Link className='shadow-2xl' href={`${whereTo}`}>

            <button className='hover:scale-110 text-white text-sm md:text-2xl font-sans font-semibold rounded-full bg-gray-900 group px-6 py-4 flex items-center transition duration-300 hover:bg-orange-600'>
                {text} 
            <span className=''>
                <HiArrowNarrowRight className='ml-3' />
            </span>            
          </button>

        </Link>
    );
};

export default CTAButton;
