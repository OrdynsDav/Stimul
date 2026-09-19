"use client"

import { useEffect, useState } from "react";
import { Container } from "@/components/atoms/Container/Container";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import "./Header.css"
import LogoIcon from "@/components/atoms/Icons/LogoIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
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
