import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AnimatedSection = ({ title, children, color }) => {
  const sectionRef = useRef(null)
  const [bgColor, setBgColor] = useState("#ffffff")

  useEffect(() => {
    const el = sectionRef.current

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      onEnter: () => setBgColor(color),
    })
  }, [color])

  return (
    <div style={{ backgroundColor: bgColor }} className="min-h-screen p-10">
      <section ref={sectionRef} className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{children}</p>
      </section>
    </div>
  )
}

export default AnimatedSection
