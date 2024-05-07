import React, { useMemo, useRef, useState } from "react";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);
  console.log("Rendering");
  const ref=useRef(0); 
console.log(ref.current);
  function nthPrime(n) {
    if (n < 2) {
      return null;
    }
  
    let primes = [2];
    let candidate = 3;
  
    while (primes.length < n) {
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
  
      candidate += 2;
    }
  
    return primes[n - 1];
  }
  function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  // const prime=nthPrime(number)
  const prime=useMemo(()=>nthPrime(number),[number]);
  
  return (
    <div
      className={
        "border border-black w-96 h-96 text-center p-5 m-5 " +
        (theme && "bg-gray-700 ")
      }
    >
      <button className=" m-5 border border-black bg-fuchsia-400" onClick={() => setTheme(!theme)}>
        Toggle
      </button>
      <div>
        <input
          type="number"
          className="border border-black px-3"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <p className="font-bold m-4">nth Prime: {prime}</p>
      </div>


      <button onClick={()=>{
     ref.current=ref.current+1;
      }}>increase</button>
    </div>
  );
};

export default Demo;
