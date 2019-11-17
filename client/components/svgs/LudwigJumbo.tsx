import * as React from 'react';

interface ILudwigJumbo {
  animated: string;
}

const LudwigJumbo: React.SFC<ILudwigJumbo> = ({ animated }) => (
  <svg 
    className={`${animated}Img jumbo-img`}
    id="ludwig-jumbo" 
    data-name="Layer 2" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 826 946">
  <path id="back-right-leg" class="cls-1" d="M640,872q5.1,49.5,10,99h81l18-36q-22.9-58.5-46-117Z" transform="translate(-93 -28)"/>
  <path id="back-left-leg" class="cls-1" d="M370,871c-3.3,33-6.7,66-10,99H279l-18-36,46-117Z" transform="translate(-93 -28)"/>
  <polygon id="front-left-leg" class="cls-2" points="55 656 217 791 163 944 91 944 55 656"/>
  <polygon id="slice-1" class="cls-3" points="279 846 54 657 9 522 9 396 27 315 0 207 18 0 162 18 261 72 414 36 279 846"/>
  <polygon id="slice-2" class="cls-3" points="277 845 412 872 547 845 610 791 412 35 277 845"/>
  <polygon id="stripe-3" class="cls-3" points="771 657 815 522 815 396 797 315 825 207 807 0 663 18 564 72 411 36 771 657"/>
  <polygon id="leg-stripe" class="cls-2" points="664 946 610 793 412 37 772 658 736 946 664 946"/>
  <polygon id="nose" class="cls-1" points="411 683 573 629 555 512 411 440 267 512 249 629 411 683"/>
  <polygon id="glasses" class="cls-4" points="411 332 357 341 339 449 276 512 222 521 150 476 96 368 15 341 24 314 114 341 267 305 348 323 375 314 411 305 447 314 474 323 555 305 708 341 798 314 807 341 726 368 672 476 600 521 546 512 483 449 465 341 411 332"/>
  <polygon id="nostril-1" class="cls-3" points="483 611 465 602 456 584 456 566 465 548 483 539 501 548 510 566 510 584 501 602 483 611"/>
  <polygon id="nostril-2" class="cls-3" points="339 611 357 602 366 584 366 566 357 548 339 539 321 548 312 566 312 584 321 602 339 611"/>
</svg>

);

export default LudwigJumbo;
