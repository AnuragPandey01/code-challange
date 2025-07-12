import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { MagicCard } from "@/components/magicui/magic-card";

function TerminalDeco() {
  return (
    <MagicCard className="rounded-xl">
      <Terminal className="h-fit border-none bg-transparent">
        <TypingAnimation className="text-lg">
          &gt; npm create code-challenge-platform@latest
        </TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Initializing Code Challenge Platform</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Setting up authentication & collaboration</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Configuring real-time competitions</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Setting up discussion forums</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-blue-500">
          <span>
            ℹ Platform ready: Code collaboration • Competitions • Discussions
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Welcome to CodeChallenge! Sign in to start competing.
        </TypingAnimation>
      </Terminal>
    </MagicCard>
  );
}

export default TerminalDeco;
