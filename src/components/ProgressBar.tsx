import { useEffect, useState } from 'react'; 


interface ProgressBarProps {
  current: number;
  max: number;
}

function ProgressBar({ current, max }: ProgressBarProps) {

  const [progressClass, setProgressClass] = useState<String | string >("h-full bg-primary-600")

  const value = Math.floor((current / max) * 100)
  const valueAsPercentage = `${value}`
  // console.log("valueAsPercentage: ", valueAsPercentage); 

  let  getProgressClass = (valAsPercent: string): String => {
    if (valAsPercent == "25"){
      // console.log("val is 25"); 
      return 'h-full bg-primary-600'; 
    } else if (valAsPercent == "50"){
      // console.log("val is 50"); 
      return 'h-full bg-secondary-600'; 
    } else if (valAsPercent == "75"){
      return 'h-full bg-tertiary-600';
    } else {
      return 'h-full bg-quaternary-600'; 
    }
  }

  useEffect(() => {
    //Runs only on the first render
    // console.log("current from useEffect: ", current); 
    let newClass = getProgressClass(valueAsPercentage);
    // console.log("progressBar called, new class: ", newClass); 
    setProgressClass(newClass);
  });


  return (
    <div className="absolute inset-x-0 top-0 h-3">
      
      {/* tried this with ternary around just the word "primary/secondary/etc.", didn't work  */}
      <div className={`${progressClass}`}  style={{ width: valueAsPercentage + "%" }} />

      {/* <div>{progressClass}</div>
      <div>{valueAsPercentage}</div> */}
    </div>
  )
}

export default ProgressBar
