import { Suspense } from "react";
import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import JoinUs from "../AppComponents/JoinUs";
import PortfolioSection from "../AppComponents/PortfolioSection";
import RecentProjectPage from "../AppComponents/RecentProject";
import TestimonialSection from "../AppComponents/Testimonial";
import LoadingState from "@/components/shared/LoadingState";

export const revalidate = 3600;

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<LoadingState />}>
        <PortfolioSection />
        <RecentProjectPage />
        <TestimonialSection />
        <JoinUs />
        <BuyMeACoffee url="./footer-vid.mp4" />
      </Suspense>
    </div>
  );
}
