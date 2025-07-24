export const ReactiveAcceleratorLogo = ({ className, height, width }) => {
    return (
        <svg
            width={width || 290}
            height={height || 60}
            viewBox='59 0 280 80' // Start viewBox at x=10 instead of 0
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g transform='translate(0, 10)'>
                <g transform='scale(1.2)'>
                    <g stroke='#6366F1' strokeWidth='4' fill='none'>
                        <ellipse rx='18' ry='28' cx='35' cy='30' transform='rotate(0 35 30)' />
                        <ellipse rx='18' ry='28' cx='35' cy='30' transform='rotate(60 35 30)' />
                        <ellipse rx='18' ry='28' cx='35' cy='30' transform='rotate(120 35 30)' />
                    </g>
                    <polygon points='30,20 26,35 32,35 28,45 42,28 36,28 40,20' fill='#6366F1' />
                </g>
            </g>
            <text
                x='90'
                y='50'
                fontFamily='Segoe UI, sans-serif'
                className={className}
                fontSize='24'
                fill='currentColor'
                fontWeight='600'>
                Reactive Accelerator
            </text>
        </svg>
    );
};

