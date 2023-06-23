import { useEffect, useState } from "react";

interface Props {
  heightString: string,
  className?: string,
  bgColor?: string,
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

const Box = ({ heightString, bgColor, children, className }: Props) => {
  const [classes, setClasses] = useState('');
  
  useEffect(() => {
    const classN: string = `w-screen h-[${heightString}] min-h-[80px] bg-${bgColor} ${className}`;
    setClasses(classN);
    console.log(classN);
  }, [classes, heightString, bgColor, className])
  return (
    <div className={classes} >
      {children}
    </div>
  );
}

Box.defaultProps = {
  bgColor: '',
  className: ''
}

export default Box;