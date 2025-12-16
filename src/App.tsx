import { Button } from "./components/ui/button";
import { FadeInSection } from "./components/FadeInSection";
import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Calendar, 
  Clock, 
  Trophy,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-[980px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="tracking-tight">FocusFlow</span>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#metrics" className="text-muted-foreground hover:text-foreground transition-colors">
                Metrics
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <Button size="sm" className="rounded-full">
            Try Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-14">
        <div className="max-w-[980px] w-full text-center space-y-6 py-20">
          <FadeInSection>
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
              Master your
              <br />
              student life.
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The productivity app designed for students who want to achieve more,
              stress less, and stay on top of their goals.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8">
                Download Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Watch Demo
              </Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.6}>
            <div className="mt-16 relative">
              <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl border border-border overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="space-y-4 p-8">
                    <div className="flex gap-3 justify-center">
                      <div className="w-32 h-32 bg-card rounded-2xl border border-border" />
                      <div className="w-32 h-32 bg-card rounded-2xl border border-border" />
                      <div className="w-32 h-32 bg-card rounded-2xl border border-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Track Everything Section */}
      <section className="py-32 px-6">
        <div className="max-w-[980px] mx-auto">
          <FadeInSection>
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-5xl md:text-6xl tracking-tight">
                Track everything
                <br />
                that matters.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get insights into your study habits, focus patterns, and academic progress.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeInSection delay={0.1}>
              <div className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Study Time</h3>
                  <p className="text-muted-foreground">
                    Automatically track your study sessions and see how your time is distributed across subjects.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-5xl mb-2">24.5 hrs</div>
                  <p className="text-sm text-muted-foreground">This week</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-purple-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Focus Score</h3>
                  <p className="text-muted-foreground">
                    Measure your concentration levels and identify your most productive hours.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-5xl mb-2">92%</div>
                  <p className="text-sm text-muted-foreground">Average focus</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Tasks Completed</h3>
                  <p className="text-muted-foreground">
                    Stay on top of assignments, projects, and deadlines with intelligent task management.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-5xl mb-2">47/52</div>
                  <p className="text-sm text-muted-foreground">Tasks this week</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Grade Average</h3>
                  <p className="text-muted-foreground">
                    Monitor your academic performance and track improvement over time.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-5xl mb-2">3.8 GPA</div>
                  <p className="text-sm text-muted-foreground">Current semester</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Deep Focus Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[980px] mx-auto">
          <FadeInSection>
            <div className="text-center space-y-8">
              <h2 className="text-5xl md:text-6xl tracking-tight">
                Deep Focus Mode.
                <br />
                Zero Distractions.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Block distracting apps and websites during study sessions.
                Stay in the zone longer.
              </p>
              <div className="pt-8">
                <div className="w-full max-w-4xl mx-auto aspect-[16/10] bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl border border-border overflow-hidden shadow-2xl">
                  <div className="relative h-full flex items-center justify-center p-12">
                    <div className="w-full h-full bg-card/50 backdrop-blur rounded-2xl border border-border flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Target className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-4xl">Focus Mode Active</div>
                        <p className="text-muted-foreground">25 minutes remaining</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-32 px-6">
        <div className="max-w-[980px] mx-auto">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl tracking-tight">
                  Smart analytics.
                  <br />
                  Better decisions.
                </h2>
                <p className="text-xl text-muted-foreground">
                  Visualize your productivity patterns with beautiful charts and insights
                  that help you understand when you work best.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1">Weekly Reports</div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive breakdowns of your productivity metrics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1">Trend Analysis</div>
                      <p className="text-sm text-muted-foreground">
                        Spot patterns and optimize your study schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1">Goal Tracking</div>
                      <p className="text-sm text-muted-foreground">
                        Set and achieve your academic milestones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl border border-border p-8">
                  <div className="w-full h-full bg-card/50 backdrop-blur rounded-2xl border border-border flex items-center justify-center">
                    <BarChart3 className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-[980px] mx-auto">
          <FadeInSection>
            <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl border border-border p-12 md:p-16 text-center space-y-8">
              <h2 className="text-5xl md:text-6xl tracking-tight">
                Start achieving more.
                <br />
                Today.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who are already mastering their productivity
                with FocusFlow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8">
                  Download for Free
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Learn More
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Available for Mac, Windows, iOS, and Android
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2025 FocusFlow. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
