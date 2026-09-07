import { Badge } from '@styldoor/ui/components/badge';
import { Button } from '@styldoor/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@styldoor/ui/components/card';
import { Input } from '@styldoor/ui/components/input';
import { Label } from '@styldoor/ui/components/label';
import { Separator } from '@styldoor/ui/components/separator';
import { Switch } from '@styldoor/ui/components/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@styldoor/ui/components/tabs';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function UiShowcase() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">@styldoor/ui</h1>
        <p className="text-xs text-muted-foreground">
          shadcn components served from the workspace UI package. Add{' '}
          <code className="bg-muted px-1 py-0.5">?theme</code> via the site
          toggle to check both palettes.
        </p>
      </header>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Create workspace</CardTitle>
            <CardDescription>
              Name it and invite your team later.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ws-name">Workspace name</Label>
              <Input id="ws-name" placeholder="Acme Inc." />
            </div>
            <div className="flex items-center gap-2">
              <Switch id="ws-public" />
              <Label htmlFor="ws-public">Make public</Label>
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="ghost">Cancel</Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-muted-foreground">
            Summary of everything happening in the workspace.
          </TabsContent>
          <TabsContent value="activity" className="text-muted-foreground">
            A running log of recent changes.
          </TabsContent>
          <TabsContent value="settings" className="text-muted-foreground">
            Configure preferences and access.
          </TabsContent>
        </Tabs>
      </Section>

      <Separator />

      <footer className="text-xs text-muted-foreground">
        Edit <code className="bg-muted px-1 py-0.5">src/app/ui/page.tsx</code>{' '}
        to change this page.
      </footer>
    </main>
  );
}
