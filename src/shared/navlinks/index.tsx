import React from "react";

interface INavLinksProps {
  href?: string;
  text?: string;
}

export const INavLinks = ({ href, text }: INavLinksProps) => {
  return <a href={href}>{text}</a>;
};
