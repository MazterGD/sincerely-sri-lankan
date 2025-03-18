// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: quDeq6xe5KMiTCfKiiLfyW
// Component: gcpmzTU7M7CU

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button2 from "../../Button2"; // plasmic-import: uBHYOO-5nmaV/component

import { useScreenVariants as useScreenVariantseoIIho6Ui3Kx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eoIIho6UI3KX/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: quDeq6xe5KMiTCfKiiLfyW/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: gcpmzTU7M7CU/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: kRrkkxwaHN8d/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: G90KffN5B1H9/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: -Od_nWjqFkq9/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  menu?: Flex__<"div">;
  menuBar?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  button2?: Flex__<typeof Button2>;
};

export interface DefaultHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseoIIho6Ui3Kx()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"menu"}
      data-plasmic-override={overrides.menu}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.menu
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"menuBar"}
        data-plasmic-override={overrides.menuBar}
        hasGap={true}
        className={classNames(projectcss.all, sty.menuBar)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"50px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"1146px"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={{
            src: "/plasmic/sincerely_sri_lankan_website/images/logoYellowPng.png",
            fullWidth: 3771,
            fullHeight: 1526,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__iMaex)} />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nfJt7)}
        >
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__ehDc)}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___2S5El)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eaUb7
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "About"
                : "Home"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__hqFqf)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__xDk0K
            )}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__z2Q7V)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kEIW
              )}
            >
              {"Opportunities"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__ym4Rj)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__gvXky
            )}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___3G1JU)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wki1X
              )}
            >
              {"Impactful Exchanges"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__m9Uyp)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__gMe3Y
            )}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__ap8Dm)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__so4Dv
              )}
            >
              {"Local Committees"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__cs3RG)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__yOZem
            )}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__mbFy)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jaaYb
              )}
            >
              {"Products"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__uRsgv)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__efycU)} />

          <Button2
            data-plasmic-name={"button2"}
            data-plasmic-override={overrides.button2}
            className={classNames("__wab_instance", sty.button2)}
            color={"warning"}
            flatSide={[]}
            label={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__umLns
                )}
              >
                {"Contact Us"}
              </div>
            }
            type={"soft"}
          />

          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__vHwOk
            )}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__qhUv)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dhClr
              )}
            >
              {"Reservations"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__srQq)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5KjOl
              )}
            >
              {"https://static1.plasmic.app/insertables/button.svg"}
            </div>
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menu: ["menu", "menuBar", "img", "button2"],
  menuBar: ["menuBar", "img", "button2"],
  img: ["img"],
  button2: ["button2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menu: "div";
  menuBar: "div";
  img: typeof PlasmicImg__;
  button2: typeof Button2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menu") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("menu"),
  {
    // Helper components rendering sub-elements
    menuBar: makeNodeComponent("menuBar"),
    img: makeNodeComponent("img"),
    button2: makeNodeComponent("button2"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
