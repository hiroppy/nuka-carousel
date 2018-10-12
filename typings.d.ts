declare module '@about_hiroppy/nuka-carousel' {
  interface Props {
    autoplay?: boolean;
    autoplayInterval?: number;
    autoGenerateStyleTag?: boolean;
    slideIndex?: number;
    cellAlign?: 'left' | 'center' | 'right';
    cellSpacing?: number;
    beforeSlide?: (currentPageIndex: number) => void;
    afterSlide?: (nextSlideIndex: number) => void;
    renderBottomCenterControls?: (props: Props) => JSX.Element | null;
    renderCenterLeftControls?: (props: Props) => JSX.Element | null;
    renderCenterRightControls?: (props: Props) => JSX.Element | null;
    speed?: number;
    swiping?: boolean;
    vertical?: boolean;
    style?: Object;
    heightMode?: 'first' | 'current' | 'max';
    initialSlideHeight?: number;
    initialSlideWidth?: number;
    pauseOnHover?: boolean;
    easing?: string;
    edgeEasing?: string;
    slideWidth: string | number;
    dragging?: boolean;
    slidesToShow?: number;
    slidesToScroll?: 'auto' | number;
    transitionMode?: 'scroll' | 'fade';
    framePadding?: string;
    frameOverflow?: string;
    className?: string;
    width?: string;
    withoutControls?: boolean;
    wrapAround?: boolean;
  }

  class NukaCarousel extends React.Component<Props> {}
  export = NukaCarousel;
}
