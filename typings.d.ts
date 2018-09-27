declare module '@about_hiroppy/nuka-carousel' {
  interface Props {
    autoplay?: boolean;
    autoplayInterval?: number;
    slideIndex?: number;
    beforeSlide?: (currentPageIndex: number) => void;
    afterSlide?: (nextSlideIndex: number) => void;
    renderBottomCenterControls?: (props: Props) => JSX.Element | null;
    renderCenterLeftControls?: (props: Props) => JSX.Element | null;
    renderCenterRightControls?: (props: Props) => JSX.Element | null;
    speed?: number;
    swiping?: boolean;
    vertical?: boolean;
    style?: Object;
    heightMode?: string;
    initialSlideHeight?: number;
    edgeEasing?: string;
    slideWidth: string | number;
    dragging?: boolean;
    slidesToShow?: number;
    transitionMode?: string;
    cellSpacing?: number;
  }

  class NukaCarousel extends React.Component<Props> {}
  export = NukaCarousel;
}
