import { useState } from "react";
import kozhiadaPhoto from "../assets/kozhiada.jpeg";
import { useCart } from "../context/CartContext";

/*
  Products — product section styled after the split-panel reference
  (image stage on the left, saffron info panel on the right).

  The kozhiada photo has a pure black background, so the left panel is
  near-black and the photo melts into the stage seamlessly.
*/

const PALETTE = {
  saffron: "#EE9B2E", // right panel
  stage: "#0C0A08", // left panel, matches the photo's black bg
  ink: "#111111", // buttons / dark text
  cream: "#FFF8EE", // text on saffron
  ghost: "rgba(255, 255, 255, 0.13)", // watermark
};

const product = {
  id: 1,
  name: "Kozhiada",
  price: 240,
  weight: "400g",
};

export default function Products({ image = kozhiadaPhoto }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...product, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section
      id="products"
      className="w-full overflow-hidden scroll-mt-24 p-4 sm:p-8 md:p-16 lg:p-24"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`
        .kz-title { font-family: 'Anton', sans-serif; letter-spacing: 0.02em; }
        .kz-ghost { font-family: 'Anton', sans-serif; line-height: 0.82; user-select: none; }

        .kz-badge { animation: kz-bob 3.2s ease-in-out infinite; }
        @keyframes kz-bob {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }

        .kz-cart {
          transition: transform 180ms ease, background 180ms ease;
        }
        .kz-cart:hover { transform: translateY(-2px); }
        .kz-cart:active { transform: translateY(0); }

        .kz-heart { transition: transform 160ms ease; }
        .kz-heart:hover { transform: scale(1.08); }

        .kz-img { filter: drop-shadow(0 30px 40px rgba(238, 155, 46, 0.18)); }

        @media (prefers-reduced-motion: reduce) {
          .kz-badge { animation: none; }
          .kz-cart, .kz-heart { transition: none; }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:min-h-screen">
        {/* ── Left: photo stage ─────────────────────────────── */}
        <div
          className="relative flex items-center justify-center min-h-[320px] sm:min-h-[380px] md:min-h-0 rounded-3xl"
          style={{ backgroundColor: PALETTE.stage }}
        >
          {/* floating badge */}
          <div
            className="kz-badge absolute top-6 left-6 md:top-14 md:left-14 z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-[108px] md:h-[108px] rounded-full flex flex-col items-center justify-center text-center"
            style={{
              backgroundColor: PALETTE.saffron,
              color: PALETTE.ink,
            }}
          >
            <span className="kz-title text-xs sm:text-lg md:text-xl leading-none">HOT &amp;</span>
            <span className="kz-title text-xs sm:text-lg md:text-xl leading-none mt-1">CRISPY</span>
          </div>

          {imgOk ? (
            <img
              src={image}
              alt="A white bowl piled with golden, crimped-edge kozhiada"
              className="kz-img w-full h-full object-contain rounded-3xl"
              loading="lazy"
              decoding="async"
              onError={() => setImgOk(false)}
            />
          ) : (
            /* graceful placeholder if the image path isn't set yet */
            <div
              className="flex items-center justify-center rounded-full text-center px-10"
              style={{
                width: 320,
                height: 320,
                border: `2px dashed ${PALETTE.saffron}`,
                color: PALETTE.saffron,
              }}
            >
              Add kozhiada.jpeg to /public to show the product photo
            </div>
          )}

          {/* warm glow under the bowl */}
          <div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 300,
              height: 60,
              background: "radial-gradient(ellipse, rgba(238,155,46,0.25), transparent 70%)",
              filter: "blur(12px)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* ── Right: saffron info panel ─────────────────────── */}
        <div
          className="relative flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-14 md:px-16 md:py-16 lg:px-20 rounded-3xl overflow-hidden"
          style={{ backgroundColor: PALETTE.saffron, color: PALETTE.cream }}
        >
          {/* ghost watermark */}
          <div
            className="kz-ghost absolute bottom-4 right-4 sm:bottom-8 sm:right-6 text-right pointer-events-none"
            style={{ color: PALETTE.ghost, fontSize: "clamp(2.5rem, 12vw, 8.5rem)" }}
            aria-hidden="true"
          >
            100%
            <br />
            NADAN
          </div>

          {/* sparkle mark */}
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="mb-4 sm:mb-6">
            <path d="M6 20 L10 12" stroke={PALETTE.cream} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M14 24 L20 14" stroke={PALETTE.cream} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M22 27 L25 21" stroke={PALETTE.cream} strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <h2 className="kz-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase relative z-10">
            Kozhiada — Malabar Special
          </h2>

          <div className="mt-5 mb-6 sm:mt-6 sm:mb-8 h-px w-32" style={{ backgroundColor: "rgba(255,248,238,0.5)" }} />

          <p className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
            ₹{product.price} <span className="text-base sm:text-lg font-medium opacity-80">/ {product.weight.toLowerCase()}</span>
          </p>

          <p className="mt-5 sm:mt-7 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed opacity-95 relative z-10">
            Crisp, hand-crimped pastry pockets stuffed with a peppery Malabar chicken
            masala and deep-fried to a golden crunch. Made fresh every evening —
            best eaten warm with a strong cup of chaya.
          </p>

          <dl className="mt-7 sm:mt-9 space-y-3 text-sm sm:text-base relative z-10">
            <div className="flex gap-4 sm:gap-6">
              <dt className="w-24 sm:w-28 shrink-0 uppercase tracking-wide opacity-80">Category:</dt>
              <dd className="font-semibold">Snacks</dd>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <dt className="w-24 sm:w-28 shrink-0 uppercase tracking-wide opacity-80">Tags:</dt>
              <dd className="font-semibold">malabar, tea time, savoury</dd>
            </div>
          </dl>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 relative z-10">
            <button
              onClick={handleAdd}
              className="kz-cart px-6 sm:px-9 py-3 sm:py-4 uppercase tracking-widest text-xs sm:text-sm font-bold rounded-xl"
              style={{
                backgroundColor: added ? PALETTE.cream : PALETTE.ink,
                color: added ? PALETTE.ink : PALETTE.cream,
              }}
            >
              {added ? "Added to cart ✓" : "Add to cart"}
            </button>

            <button
              onClick={() => setLiked((v) => !v)}
              aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={liked}
              className="kz-heart flex items-center justify-center rounded-xl w-12 h-12 sm:w-[54px] sm:h-[54px]"
              style={{ backgroundColor: PALETTE.ink }}
            >
              <svg width="20" height="18" viewBox="0 0 24 22" aria-hidden="true">
                <path
                  d="M12 21 C6 16 1 12 1 7 A5.5 5.5 0 0 1 12 4.5 A5.5 5.5 0 0 1 23 7 C23 12 18 16 12 21 Z"
                  fill={liked ? PALETTE.saffron : "none"}
                  stroke={liked ? PALETTE.saffron : PALETTE.cream}
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
