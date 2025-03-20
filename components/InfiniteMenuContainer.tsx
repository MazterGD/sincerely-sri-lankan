import React from "react";
import InfiniteMenu from "./InfiniteMenu";

interface InfiniteMenuContainerProps {
  className: string;
}

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

const items: MenuItem[] = [
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    link: "https://google.com/",
    title: "Person 1",
    description: "Sri Lanka is pretty cool, right?",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    link: "https://google.com/",
    title: "Person 2",
    description: "I had the most amazing experience",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    link: "https://google.com/",
    title: "Person 3",
    description: "Food was spicy",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    link: "https://google.com/",
    title: "Person 4",
    description: "People were so cool",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    link: "https://google.com/",
    title: "Person 5",
    description: "Description 5",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    link: "https://google.com/",
    title: "Person 6",
    description: "Description 6",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    link: "https://google.com/",
    title: "Person 7",
    description: "Description 7",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    link: "https://google.com/",
    title: "Person 8",
    description: "Description 8",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    link: "https://google.com/",
    title: "Person 9",
    description: "Description 9",
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    link: "https://google.com/",
    title: "Person 10",
    description: "Description 10",
  }
];

export const InfiniteMenuContainer: React.FC<InfiniteMenuContainerProps> = ({
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        height: "400px",
        position: "relative",
      }}
    >
      <InfiniteMenu items={items} />
    </div>
  );
};
