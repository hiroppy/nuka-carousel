declare module '@about_hiroppy/nuka-carousel' {
  interface State {
    currentSlide: Props['slideIndex'];
    slideCount: number;
    frameWidth: number;
    slideWidth: number;
    slidesToScroll: Props['slidesToScroll'];
    cellSpacing: number;
    slidesToShow: Props['slidesToShow'];
    wrapAround: Props['wrapAround'];
    nextSlide: () => () => void;
    previousSlide: () => () => void;
    goToSlide: (index: number) => (index: number) => void;
  }

  interface Props {
    autoplay?: boolean;
    autoplayInterval?: number;
    autoGenerateStyleTag?: boolean;
    slideIndex?: number;
    cellAlign?: 'left' | 'center' | 'right';
    cellSpacing?: number;
    beforeSlide?: (currentPageIndex: number) => void;
    afterSlide?: (nextSlideIndex: number) => void;
    renderBottomCenterControls?: (props: State) => JSX.Element | null;
    renderCenterLeftControls?: (props: State) => JSX.Element | null;
    renderCenterRightControls?: (props: State) => JSX.Element | null;
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
