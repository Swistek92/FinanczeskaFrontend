import { SVGProps } from "react";

export function DolarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      {...props}
    >
      <mask id='ipSFinance0'>
        <g fill='none' strokeLinejoin='round' strokeWidth='4'>
          <path
            fill='#fff'
            stroke='#fff'
            d='M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z'
          ></path>
          <path
            stroke='#000'
            strokeLinecap='round'
            d='M18 22h12m-12 6h12m-5.992-6v12M30 15l-6 6l-6-6'
          ></path>
        </g>
      </mask>
      <path
        fill='currentColor'
        d='M0 0h48v48H0z'
        mask='url(#ipSFinance0)'
      ></path>
    </svg>
  );
}
