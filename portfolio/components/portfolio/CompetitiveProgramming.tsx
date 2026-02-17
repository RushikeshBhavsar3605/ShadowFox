import { SectionHeader } from "./SectionHeader";
import { Trophy, Target, Flame, BookOpen } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

export function CompetitiveProgramming() {
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-4 h-4 text-accent" />,
      title: "LeetCode Knight — Rating 1881",
      detail: "Global Rank 37,818 / 809,286 (Top 4.67%)",
    },
    {
      icon: <Target className="w-4 h-4 text-accent" />,
      title: "Biweekly Contest #465 — Rank 735",
      detail: "Top 2.32% globally · AIR 263 (Top 3.31%) out of 31,708",
    },
    {
      icon: <Flame className="w-4 h-4 text-accent" />,
      title: "750+ Problems · 350+ Day Streak",
      detail: "22 badges earned across 26+ contests",
    },
    {
      icon: <BookOpen className="w-4 h-4 text-accent" />,
      title: "15+ Published Solution Write-ups",
      detail: "Detailed explanations shared on LeetCode editorial platform",
    },
  ];

  return (
    <section
      id="achievements"
      className="section-padding border-t border-border"
    >
      <div className="container-wide">
        <SectionHeader
          label="Achievements"
          title="Competitive Programming & DSA"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
            >
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
