import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function IndexPage() {
  return (

    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <Avatar>
      <AvatarImage src="https://github.com/brcelso.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Welcome to the New Age. <br className="hidden sm:inline" />
          Enjoy it.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          This is my page.
          Just Code.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.vercel}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Vercel
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.instagram}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.twitter}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Twitter
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.whatsapp}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          WhatsApp
        </Link>
        
        </div>
    </section>
    
  )
}


