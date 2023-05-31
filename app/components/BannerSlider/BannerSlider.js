"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BannerSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="border-b border-sold-out/50 border-gray-100">
      <div className="grid-container overflow-x-hidden px-3 py-2 md:py-3 lg:px-0 lg:py-4">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container ">
            <span className="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:items-center xl:justify-center xl:text-left">
              <span>
                <a
                  href="https://support.plnts.com/hc/en-us/categories/360002944199-Transport-and-delivery"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <strong>Free shipping</strong> for orders over $75,-
                </a>
              </span>
            </span>
            <span className="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:items-center xl:justify-center xl:text-left">
              <span>
                <a href="/en/page/guarantee">
                  30 days PLNTS <strong>health guarantee</strong>
                </a>
              </span>
            </span>
            <span className="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:items-center xl:justify-center xl:text-left">
              <span>
                <a
                  href="https://www.trustpilot.com/review/plnts.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <strong>4.6/5</strong> out of <strong>15.000+ reviews</strong>
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
