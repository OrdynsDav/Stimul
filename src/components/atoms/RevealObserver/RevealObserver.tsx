"use client"

import { useEffect } from "react"

export function RevealObserver() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(".u-reveal")

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            elements.forEach((element) => element.classList.add("is-visible"))
            return
        }

        if (!("IntersectionObserver" in window)) {
            return
        }

        elements.forEach((element) => element.classList.add("is-ready"))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -8%" }
        )

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return null
}
