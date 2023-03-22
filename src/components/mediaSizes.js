import  { css } from "styled-components";
export const sizeNumbers = {
  mobileXS: 320,
  mobileS: 380,
  mobileM: 480,
  mobileSM: 575, // small
  mobileL: 600,
  tabletS: 650,
  tabletM: 767, // medium
  tabletL: 900,
  laptopS: 991, // large
  laptopM: 1024,
  laptopL: 1200, // extra large
  laptopXL: 1250,
  desktopS: 1300,
  desktop: 1400, // extra extra large
  desktopL: 1600,
};

export const size = {
  mobileXS: `${sizeNumbers.mobileXS}px`,
  mobileS: `${sizeNumbers.mobileS}px`,
  mobileM: `${sizeNumbers.mobileM}px`,
  mobileSM: `${sizeNumbers.mobileSM}px`,
  mobileL: `${sizeNumbers.mobileL}px`,
  tabletS: `${sizeNumbers.tabletS}px`,
  tabletM: `${sizeNumbers.tabletM}px`,
  tabletL: `${sizeNumbers.tabletL}px`,
  laptopS: `${sizeNumbers.laptopS}px`,
  laptopM: `${sizeNumbers.laptopM}px`,
  laptopL: `${sizeNumbers.laptopL}px`,
  laptopXL: `${sizeNumbers.laptopXL}px`,
  desktopS: `${sizeNumbers.desktopS}px`,
  desktop: `${sizeNumbers.desktop}px`,
  desktopL: `${sizeNumbers.desktopL}px`,
};

export const deviceQuery = {
  mobileXS: `@media (max-width: ${size.mobileXS})`,
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileSM: `@media (max-width: ${size.mobileSM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  tabletS: `@media (max-width: ${size.tabletS})`,
  tabletM: `@media (max-width: ${size.tabletM})`,
  tabletL: `@media (max-width: ${size.tabletL})`,
  laptopS: `@media (max-width: ${size.laptopS})`,
  laptopM: `@media (max-width: ${size.laptopM})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  laptopXL: `@media (max-width: ${size.laptopXL})`,
  desktopS: `@media (max-width: ${size.desktopS})`,
  desktop: `@media (max-width: ${size.desktop})`,
  desktopL: `@media (max-width: ${size.desktopL})`,
};

