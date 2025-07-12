import { Globe } from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import useThemeStore from "@/store/themeStore";
import {
  GitBranch,
  MessageSquare,
  Sword,
  Trophy,
} from "lucide-react";
import type { COBEOptions, Marker } from "cobe";

const marker: Marker[] = [{ location: [18.9582, 72.8321], size: 0.1 }];

const GLOBE_CONFIG: COBEOptions = {
  width: 200,
  height: 200,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: marker,
};

const GLOBE_CONFIG_DARK: COBEOptions = {
  width: 200,
  height: 200,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0, 0, 0],
  markers: marker,
};

function Home() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center md:flex-row">
        <div className="flex flex-col gap-5 md:flex-1">
          <div className="text-4xl font-bold md:text-5xl">
            Challange Your Code,
            <br /> Level Up Your Skill
          </div>
          <p className="text-md text-muted-foreground md:text-xl">
            Submit coding challenges, collaborate with developers worldwide, and
            compete in real-time. The ultimate platform for coding excellence.
          </p>
          <div className="flex w-full flex-col gap-2 md:w-fit md:flex-row">
            <Button variant="default" size="lg">
              Code Sandbox
            </Button>
            <Button variant="outline" size="lg">
              Browse Challanges
            </Button>
          </div>
        </div>
        <div className="md:flex-1">
          <Globe config={theme === "dark" ? GLOBE_CONFIG_DARK : GLOBE_CONFIG} />
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-center text-3xl font-bold">
          Everything You Need to Excel
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-[500px] text-center">
          From submitting challenges to real-time collaboration, we've got all
          the tools you need.
        </p>
        {/* flex flex-col gap-5 md:flex-row md:justify-around */}
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          <FeatureCard
            icon={Sword}
            title="Challange" 
            description="Create and share your own coding challenges with the community"
          />
          <FeatureCard
            icon={Trophy}
            title="Compete & Win"
            description="Participate in challanges and climb the global leaderboard"
          />
          <FeatureCard
            icon={GitBranch}
            title="Collaborate"
            description="Work together on solutions with real-time code collaboration"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Discuss & Learn"
            description="Engage in discussions and learn from fellow developers"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
