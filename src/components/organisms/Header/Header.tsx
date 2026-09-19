"use client"

import { useEffect, useState } from "react";
import { Container } from "@/components/atoms/Container/Container";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import "./Header.css"
import LogoIcon from "@/components/atoms/Icons/LogoIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const handleScroll = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        const scrollTop = Math.max(
          window.scrollY,
          document.documentElement.scrollTop,
          document.body.scrollTop
        )

        setIsScrolled(scrollTop > 12)
        frameId = null
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true })
    window.visualViewport?.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("scroll", handleScroll, true)
      window.visualViewport?.removeEventListener("scroll", handleScroll)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <header
      className={`header${isScrolled ? " header--scrolled" : ""}`}
      data-scrolled={isScrolled}
    >
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <LogoIcon />
          </div>
          <Navigation />
        </div>
      </Container>
    </header>
  )
}
