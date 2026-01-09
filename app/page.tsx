"use client"

import { useEffect, useRef, useState } from "react"
import Card, { Cards } from "@/components/Card"
import Button from "@/components/ui/Button"
import Tabs, { TabItem } from "@/components/ui/Tabs"
import Wrapper from "@/components/ui/Wrapper"
import Giftcard from "@/components/Giftcard"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const tabs: TabItem[] = [
    { title: "Coupons", targetId: "coupons" },
    { title: "Giftcards", targetId: "giftcards" },
    { title: "Payment Offers", targetId: "payments" },
  ]

  const offerCard: Cards[] = [
    {
      amount: "₹1,500",
      title: "LONGSTAY",
      description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      link: "/offers/longstay",
      color: "#C46D3B",
      isCollect: true
    },
    {
      amount: "₹3,000",
      title: "EARLYBIRD",
      description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      link: "/offers/longstay",
      color: "#C46D3B",
      isCollect: true
    },
    {
      amount: "Flat 10%",
      title: "RUSHDEAL",
      description: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      link: "/offers/longstay",
      color: "#C46D3B",
      isCollect: true
    }
  ]

  const GiftCards: Cards[] = [
    {
      amount: "₹1000",
      title: "Assured vouchers up to",
      description: "of trending brands",
      color: "#C46D3B",
      link: "",
      logo: "./gift1.png",
      isCollect: true
    },
    {
      amount: "upto 15% Off",
      title: "Save more on your bookings",
      description: "on select payment methods",
      color: "#C46D3B",
      link: "",
      logo: "./gift2.png",
      isCollect: true
    },
  ]

  const GiftCards1: Cards[] = [
    {
      amount: "₹1500",
      title: "MYNTRA",
      logo: "./mintra.svg",
      isCollect: true,
      color: "#D41C9B",
      description: "Get this gift voucher on booking above ₹2000",
      link: "/"
    },
    {
      amount: "₹1000",
      title: "HAMMER",
      logo: "./hammer.svg",
      isCollect: true,
      color: "#000000",
      description: "Get this gift voucher on booking above ₹1500",
      link: "/"
    }
  ]

  const payments: Cards[] = [
    {
      amount: "10% Off",
      title: "HDFC BANK",
      logo: "./hdfc.svg",
      isCollect: false,
      color: "#3168CF",
      description: "Get 10% off on booking above ₹1500",
      link: "/",
      isEvent: false
    },
    {
      amount: "10% Off",
      title: "HDFC BANK",
      logo: "./hdfc.svg",
      isCollect: false,
      color: "#3168CF",
      description: "Get 10% off on booking above ₹1500",
      link: "/",
      isEvent: false
    }
  ]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      setIsScrolled(el.scrollTop > 0)
    }

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="sticky top-0 z-40 bg-background">
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-text font-bold text-2xl">Offer</h1>
          <p className="text-sm text-muted font-light">
            Book directly with us to get exclusive benefits
          </p>
          <Button className="mt-2 rounded w-full">Sign in</Button>
        </div>
      </div>
      <div
        className={`sticky top-33 z-30 bg-background transition-shadow ${isScrolled ? "shadow-md" : ""}`}
      >
        <Tabs tabs={tabs} offset={180} />
      </div>

      <div
        ref={scrollRef}
        className="overflow-y-auto px-4"
      >
        <div>
          <Wrapper
            title="Sitewide coupons:"
            clasName="flex flex-col gap-2"
            id="coupons"
          >
            {offerCard.map((item, index) => (
              <Card
                key={index}
                amount={item.amount}
                color={item.color}
                description={item.description}
                link={item.link}
                title={item.title}
                isCollect={item.isCollect}
                logo={item.logo}
              />
            ))}
          </Wrapper>
        </div>
        <div>
          <Wrapper
            title="Bonus gift cards:"
            clasName="flex flex-col gap-8"
            id="giftcards"
          >
            {GiftCards.map((item, index) => (
              <Giftcard
                key={index}
                amount={item.amount}
                color={item.color}
                description={item.description}
                link={item.link}
                title={item.title}
                isCollect={item.isCollect}
                logo={item.logo}
              />
            ))}
          </Wrapper>
        </div>
        <div>
          <Wrapper
            title="Bonus gift cards:"
            subTitle="Collect multiple of these"
            id="giftcards"
            clasName="flex flex-col gap-4"
          >
            {GiftCards1.map((item, index) => (
              <Card
                key={index}
                amount={item.amount}
                color={item.color}
                description={item.description}
                link={item.link}
                title={item.title}
                isCollect={item.isCollect}
                logo={item.logo}
              />
            ))}
          </Wrapper>
        </div>
        <div>
          <Wrapper
            title="Bonus gift cards:"
            subTitle="Collect multiple of these"
            id="payments"
            clasName="flex flex-col gap-4"
          >
            {payments.map((item, index) => (
              <Card
                key={index}
                amount={item.amount}
                color={item.color}
                description={item.description}
                link={item.link}
                title={item.title}
                isCollect={item.isCollect}
                logo={item.logo}
                isEvent={item.isEvent}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    </div>
  )
}
