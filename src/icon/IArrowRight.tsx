
interface prop{
    width?: number;
    height?: number;
}
const IArrowRight = ({height,width}:prop) => {
    return (
        <div>
            <svg width={width||10} height={height||14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.34002 6.99575C9.3403 6.77713 9.24132 6.55844 9.04308 6.39164C9.01066 6.36437 8.9766 6.33933 8.94116 6.31652L1.73085 0.249923C1.33492 -0.0832024 0.692995 -0.0832024 0.297068 0.249924C-0.0988607 0.583049 -0.0988617 1.12315 0.297067 1.45628L6.88608 7.00013L0.297004 12.544C-0.0989237 12.8772 -0.0989237 13.4173 0.297004 13.7504C0.692932 14.0835 1.33486 14.0835 1.73079 13.7504L8.94068 7.68415C8.97631 7.66125 9.01056 7.63609 9.04314 7.60868C9.24405 7.43964 9.34301 7.2173 9.34002 6.99575Z"
                      fill="white"/>
            </svg>
        </div>
    );
};

export default IArrowRight;