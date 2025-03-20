import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import { InfiniteMenuContainer } from "@/components/InfiniteMenuContainer";
import { FlowingMenuContainer } from "@/components/FlowingMenu/FlowingMenuContainer";

PLASMIC.registerComponent(InfiniteMenuContainer, {
  name: "InfiniteMenuContainer",
  importPath: "./components/InfiniteMenuContainer",
  props: {},
});

PLASMIC.registerComponent(FlowingMenuContainer, {
  name: "FlowingMenuContainer",
  importPath: "./components/FlowingMenu/FlowingMenuContainer",
  props: {},
});

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
