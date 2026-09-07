import { AppShell } from "@astryxdesign/core/AppShell";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { TopNav, TopNavHeading } from "@astryxdesign/core/TopNav";
import { VStack } from "@astryxdesign/core/VStack";

export function GreetingPage() {
  return (
    <AppShell
      contentPadding={6}
      topNav={
        <TopNav heading={<TopNavHeading heading="Hello World" />} />
      }
    >
      <VStack gap={4}>
        <Heading level={1}>Hello, World!</Heading>
        <Text type="body">Welcome to the app.</Text>
      </VStack>
    </AppShell>
  );
}
