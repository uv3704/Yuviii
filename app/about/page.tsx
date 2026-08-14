import { Navbar }  from "@/components/navbar"
import { Footer }  from "@/components/footer"
import { Reveal }  from "@/components/reveal"
import { ArtisticAboutExhibition } from "@/components/about/ArtisticAboutExhibition"

export const metadata = {
  title: "About & Monograph — Yuvraj Singh Rathore",
  description: "Monograph No. 01: The personal trajectory, engineering philosophy, and full-stack technical taxonomy of Yuvraj Singh Rathore.",
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "5.5rem" }}>
        
        {/* ── ARTISTIC MONOGRAPH CONTAINER ───────────────────────────── */}
        <section style={{ paddingBlock: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="container-editorial">
            <Reveal>
              <ArtisticAboutExhibition />
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
