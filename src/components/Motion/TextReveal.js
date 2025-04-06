import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const TextReveal = ({ text }) => {
  const textRef = useRef(null)
  console.log(textRef?.current?.children)
  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.4, // Delay between each letter
        ease: "power2.out",
      }
    )
  }, [])

  return (
    <div className="text-4xl font-bold">
      <span ref={textRef}>
        {text.split("").map((char, index) => (
          <span key={index}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </div>
  )
}

export default TextReveal
