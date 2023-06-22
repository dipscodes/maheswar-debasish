interface Props {
    heightString: string,
    className?: string,
    bgColor?: string,
    bgClass?: string,
    children: React.ReactElement | React.ReactElement[]
}

/**
 * @description A box that takes two parameter heightString and bgColor, and gives 
 * a div with height and min-height of {heightString} and background color of {bgColor}.
 * @param heightString: string depicting height in css (mainly to be used in tailwindcss)
 * @param bgColor: string depicting background color in css (mainly to be used in tailwindcss)
 * @param bgColor: string depicting background color in css (mainly to be used in tailwindcss)
 * @returns a div of given height and background color
 */

const Box = ({ heightString, bgColor, bgClass, children, className }: Props) => {
    return (
        <div className={`w-screen h-[${heightString}] h-min-[${heightString}] ${bgClass} ${className} bg-[${bgColor}]`}>
            {children}
        </div>
    );
}

Box.defaultProps = {
    bgClass: '',
    bgColor: '',
    className: ''
}

export default Box;