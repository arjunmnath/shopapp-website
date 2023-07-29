import Background from './back.jpg'
import React from 'react';
import Image from 'next/image';
type IconProps = React.HTMLAttributes<SVGElement>
type ImageProps = React.HTMLAttributes<HTMLImageElement>

export const Assests = {
    Logo: (props: IconProps) => (
        <svg viewBox="0 0 342 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.9065 68.6C70.1065 68.6 67.6465 68.08 65.5265 67.04C63.4465 65.96 61.8265 64.46 60.6665 62.54C59.5465 60.58 58.9865 58.28 58.9865 55.64V36.56C58.9865 33.88 59.5465 31.58 60.6665 29.66C61.8265 27.74 63.4465 26.26 65.5265 25.22C67.6465 24.14 70.1065 23.6 72.9065 23.6C75.7465 23.6 78.1865 24.14 80.2265 25.22C82.3065 26.26 83.9265 27.74 85.0865 29.66C86.2465 31.58 86.8265 33.88 86.8265 36.56H79.2665C79.2665 34.48 78.7065 32.9 77.5865 31.82C76.5065 30.74 74.9465 30.2 72.9065 30.2C70.8665 30.2 69.2865 30.74 68.1665 31.82C67.0465 32.9 66.4865 34.46 66.4865 36.5V55.64C66.4865 57.68 67.0465 59.26 68.1665 60.38C69.2865 61.46 70.8665 62 72.9065 62C74.9465 62 76.5065 61.46 77.5865 60.38C78.7065 59.26 79.2665 57.68 79.2665 55.64H86.8265C86.8265 58.24 86.2465 60.52 85.0865 62.48C83.9265 64.44 82.3065 65.96 80.2265 67.04C78.1865 68.08 75.7465 68.6 72.9065 68.6ZM95.2631 68V24.2H102.763V41.78H114.523V24.2H122.023V68H114.523V48.74H102.763V68H95.2631ZM131.9 68V24.2H158.18V30.74H139.28V42.14H156.08V48.62H139.28V61.46H158.18V68H131.9ZM180.836 68.6C178.036 68.6 175.576 68.08 173.456 67.04C171.376 65.96 169.756 64.46 168.596 62.54C167.476 60.58 166.916 58.28 166.916 55.64V36.56C166.916 33.88 167.476 31.58 168.596 29.66C169.756 27.74 171.376 26.26 173.456 25.22C175.576 24.14 178.036 23.6 180.836 23.6C183.676 23.6 186.116 24.14 188.156 25.22C190.236 26.26 191.856 27.74 193.016 29.66C194.176 31.58 194.756 33.88 194.756 36.56H187.196C187.196 34.48 186.636 32.9 185.516 31.82C184.436 30.74 182.876 30.2 180.836 30.2C178.796 30.2 177.216 30.74 176.096 31.82C174.976 32.9 174.416 34.46 174.416 36.5V55.64C174.416 57.68 174.976 59.26 176.096 60.38C177.216 61.46 178.796 62 180.836 62C182.876 62 184.436 61.46 185.516 60.38C186.636 59.26 187.196 57.68 187.196 55.64H194.756C194.756 58.24 194.176 60.52 193.016 62.48C191.856 64.44 190.236 65.96 188.156 67.04C186.116 68.08 183.676 68.6 180.836 68.6ZM203.133 68V24.2H210.633V41.9H215.853L224.073 24.2H232.233L222.453 45.2L232.713 68H224.373L215.733 48.74H210.633V68H203.133ZM252.549 68.6C249.749 68.6 247.309 68.08 245.229 67.04C243.189 65.96 241.609 64.46 240.489 62.54C239.409 60.58 238.869 58.28 238.869 55.64V36.56C238.869 33.92 239.409 31.64 240.489 29.72C241.609 27.76 243.189 26.26 245.229 25.22C247.309 24.14 249.749 23.6 252.549 23.6C255.389 23.6 257.829 24.14 259.869 25.22C261.909 26.26 263.469 27.76 264.549 29.72C265.669 31.64 266.229 33.9 266.229 36.5V55.64C266.229 58.28 265.669 60.58 264.549 62.54C263.469 64.46 261.909 65.96 259.869 67.04C257.829 68.08 255.389 68.6 252.549 68.6ZM252.549 62C254.589 62 256.129 61.46 257.169 60.38C258.209 59.26 258.729 57.68 258.729 55.64V36.56C258.729 34.48 258.209 32.9 257.169 31.82C256.129 30.74 254.589 30.2 252.549 30.2C250.509 30.2 248.969 30.74 247.929 31.82C246.889 32.9 246.369 34.48 246.369 36.56V55.64C246.369 57.68 246.889 59.26 247.929 60.38C249.009 61.46 250.549 62 252.549 62ZM288.526 68.6C284.246 68.6 280.886 67.44 278.446 65.12C276.046 62.76 274.846 59.56 274.846 55.52V24.2H282.406V55.46C282.406 57.54 282.926 59.16 283.966 60.32C285.006 61.48 286.526 62.06 288.526 62.06C290.486 62.06 291.986 61.48 293.026 60.32C294.106 59.16 294.646 57.54 294.646 55.46V24.2H302.206V55.52C302.206 59.56 301.006 62.76 298.606 65.12C296.206 67.44 292.846 68.6 288.526 68.6ZM320.722 68V31.16H309.262V24.2H339.742V31.16H328.282V68H320.722Z" fill="white" />
            <path d="M6.60511 73V18.4545H25.0355C29.2969 18.4545 32.7947 19.1825 35.5291 20.6385C38.2635 22.0767 40.2876 24.0565 41.6016 26.5778C42.9155 29.0991 43.5724 31.9666 43.5724 35.1804C43.5724 38.3942 42.9155 41.244 41.6016 43.7298C40.2876 46.2156 38.2724 48.1687 35.5558 49.5891C32.8391 50.9918 29.3679 51.6932 25.142 51.6932H10.2273V45.7273H24.929C27.8409 45.7273 30.1847 45.3011 31.9602 44.4489C33.7536 43.5966 35.0497 42.3892 35.8487 40.8267C36.6655 39.2464 37.0739 37.3643 37.0739 35.1804C37.0739 32.9964 36.6655 31.0877 35.8487 29.4542C35.032 27.8207 33.7269 26.56 31.9336 25.6722C30.1403 24.7667 27.7699 24.3139 24.8224 24.3139H13.2102V73H6.60511ZM32.2798 48.4972L45.7031 73H38.0327L24.8224 48.4972H32.2798Z" fill="#38BDF8" />
            <path d="M46.3949 73V18.4545H27.9645C23.7031 18.4545 20.2053 19.1825 17.4709 20.6385C14.7365 22.0767 12.7124 24.0565 11.3984 26.5778C10.0845 29.0991 9.42755 31.9666 9.42755 35.1804C9.42755 38.3942 10.0845 41.244 11.3984 43.7298C12.7124 46.2156 14.7276 48.1687 17.4442 49.5891C20.1609 50.9918 23.6321 51.6932 27.858 51.6932H42.7727V45.7273H28.071C25.1591 45.7273 22.8153 45.3011 21.0398 44.4489C19.2464 43.5966 17.9503 42.3892 17.1513 40.8267C16.3345 39.2464 15.9261 37.3643 15.9261 35.1804C15.9261 32.9964 16.3345 31.0877 17.1513 29.4542C17.968 27.8207 19.2731 26.56 21.0664 25.6722C22.8597 24.7667 25.2301 24.3139 28.1776 24.3139H39.7898V73H46.3949ZM20.7202 48.4972L7.29688 73H14.9673L28.1776 48.4972H20.7202Z" fill="#38BDF8" />
        </svg>
    ),
    Home: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_403_2969)">
                <path d="M23.1212 9.06887L15.5362 1.48287C14.5975 0.546856 13.3259 0.0212402 12.0002 0.0212402C10.6746 0.0212402 9.40298 0.546856 8.46423 1.48287L0.879226 9.06887C0.599651 9.34665 0.377996 9.67717 0.227108 10.0413C0.0762209 10.4053 -0.000896777 10.7958 0.000225703 11.1899V21.0069C0.000225703 21.8025 0.316296 22.5656 0.878905 23.1282C1.44151 23.6908 2.20458 24.0069 3.00023 24.0069H21.0002C21.7959 24.0069 22.5589 23.6908 23.1215 23.1282C23.6842 22.5656 24.0002 21.8025 24.0002 21.0069V11.1899C24.0014 10.7958 23.9242 10.4053 23.7733 10.0413C23.6225 9.67717 23.4008 9.34665 23.1212 9.06887ZM15.0002 22.0069H9.00023V18.0729C9.00023 17.2772 9.3163 16.5142 9.87891 15.9515C10.4415 15.3889 11.2046 15.0729 12.0002 15.0729C12.7959 15.0729 13.5589 15.3889 14.1215 15.9515C14.6842 16.5142 15.0002 17.2772 15.0002 18.0729V22.0069ZM22.0002 21.0069C22.0002 21.2721 21.8949 21.5264 21.7073 21.714C21.5198 21.9015 21.2654 22.0069 21.0002 22.0069H17.0002V18.0729C17.0002 16.7468 16.4734 15.475 15.5358 14.5373C14.5981 13.5997 13.3263 13.0729 12.0002 13.0729C10.6741 13.0729 9.40238 13.5997 8.46469 14.5373C7.52701 15.475 7.00023 16.7468 7.00023 18.0729V22.0069H3.00023C2.73501 22.0069 2.48066 21.9015 2.29312 21.714C2.10558 21.5264 2.00023 21.2721 2.00023 21.0069V11.1899C2.00115 10.9248 2.10642 10.6709 2.29323 10.4829L9.87823 2.89987C10.4419 2.3388 11.2049 2.02381 12.0002 2.02381C12.7956 2.02381 13.5585 2.3388 14.1222 2.89987L21.7072 10.4859C21.8933 10.6731 21.9985 10.9259 22.0002 11.1899V21.0069Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_403_2969">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    ),
    HomeSolid: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_406_2297)">
                <path d="M12 14.9918C10.3432 14.9918 9 16.335 9 17.9918V23.9918H15V17.9918C15 16.335 13.6568 14.9918 12 14.9918Z" fill="currentColor" />
                <path d="M17 17.9923V23.9923H21C22.6568 23.9923 24 22.6491 24 20.9923V11.8713C24.0002 11.3518 23.7983 10.8525 23.437 10.4793L14.939 1.29224C13.4396 -0.330101 10.9089 -0.42971 9.28655 1.06973C9.20949 1.14098 9.13523 1.21518 9.06403 1.29224L0.581016 10.4763C0.208734 10.8511 -0.000140554 11.358 7.09607e-08 11.8863V20.9923C7.09607e-08 22.6491 1.34316 23.9923 3 23.9923H6.99998V17.9923C7.01869 15.2654 9.22027 13.0387 11.8784 12.9746C14.6255 12.9083 16.9791 15.173 17 17.9923Z" fill="currentColor" />
                <path d="M12 14.9918C10.3432 14.9918 9 16.335 9 17.9918V23.9918H15V17.9918C15 16.335 13.6568 14.9918 12 14.9918Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_406_2297">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>

    ),
    Client: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_403_2799)">
                <path d="M12 11.9999C13.1867 11.9999 14.3467 11.648 15.3334 10.9888C16.3201 10.3295 17.0892 9.3924 17.5433 8.29604C17.9974 7.19969 18.1162 5.99329 17.8847 4.8294C17.6532 3.66551 17.0818 2.59642 16.2426 1.7573C15.4035 0.918186 14.3344 0.346741 13.1705 0.11523C12.0067 -0.116281 10.8003 0.00253868 9.7039 0.456664C8.60754 0.91079 7.67047 1.67983 7.01118 2.66652C6.35189 3.65321 6 4.81325 6 5.99994C6.00159 7.59075 6.63424 9.11595 7.75911 10.2408C8.88399 11.3657 10.4092 11.9984 12 11.9999ZM12 1.99994C12.7911 1.99994 13.5645 2.23454 14.2223 2.67406C14.8801 3.11359 15.3928 3.7383 15.6955 4.46921C15.9983 5.20011 16.0775 6.00438 15.9231 6.7803C15.7688 7.55623 15.3878 8.26896 14.8284 8.82837C14.269 9.38778 13.5563 9.76874 12.7804 9.92308C12.0044 10.0774 11.2002 9.99821 10.4693 9.69546C9.73836 9.39271 9.11365 8.88002 8.67412 8.22222C8.2346 7.56443 8 6.79107 8 5.99994C8 4.93908 8.42143 3.92166 9.17157 3.17151C9.92172 2.42137 10.9391 1.99994 12 1.99994Z" fill="currentColor" />
                <path d="M12 14.0006C9.61386 14.0033 7.32622 14.9523 5.63896 16.6396C3.95171 18.3268 3.00265 20.6145 3 23.0006C3 23.2658 3.10536 23.5202 3.29289 23.7077C3.48043 23.8953 3.73478 24.0006 4 24.0006C4.26522 24.0006 4.51957 23.8953 4.70711 23.7077C4.89464 23.5202 5 23.2658 5 23.0006C5 21.1441 5.7375 19.3636 7.05025 18.0509C8.36301 16.7381 10.1435 16.0006 12 16.0006C13.8565 16.0006 15.637 16.7381 16.9497 18.0509C18.2625 19.3636 19 21.1441 19 23.0006C19 23.2658 19.1054 23.5202 19.2929 23.7077C19.4804 23.8953 19.7348 24.0006 20 24.0006C20.2652 24.0006 20.5196 23.8953 20.7071 23.7077C20.8946 23.5202 21 23.2658 21 23.0006C20.9974 20.6145 20.0483 18.3268 18.361 16.6396C16.6738 14.9523 14.3861 14.0033 12 14.0006Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_403_2799">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>

    ),
    ClientSolid: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z" fill="currentColor" />
            <path d="M12 13.9991C7.03172 14.0046 3.00553 18.0308 3 22.9991C3 23.5514 3.4477 23.9991 3.99998 23.9991H20C20.5522 23.9991 21 23.5514 21 22.9991C20.9945 18.0308 16.9683 14.0046 12 13.9991Z" fill="currentColor" />
        </svg>

    ),
    Analytics: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_403_3234)" {...props}>
                <path d="M23 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z" fill="currentColor" />
                <path d="M6.00012 19.9999C6.26534 19.9999 6.51969 19.8945 6.70723 19.707C6.89476 19.5194 7.00012 19.2651 7.00012 18.9999V11.9999C7.00012 11.7347 6.89476 11.4803 6.70723 11.2928C6.51969 11.1052 6.26534 10.9999 6.00012 10.9999C5.7349 10.9999 5.48055 11.1052 5.29301 11.2928C5.10548 11.4803 5.00012 11.7347 5.00012 11.9999V18.9999C5.00012 19.2651 5.10548 19.5194 5.29301 19.707C5.48055 19.8945 5.7349 19.9999 6.00012 19.9999Z" fill="currentColor" />
                <path d="M9.99982 10V19C9.99982 19.2652 10.1052 19.5196 10.2927 19.7071C10.4802 19.8946 10.7346 20 10.9998 20C11.265 20 11.5194 19.8946 11.7069 19.7071C11.8945 19.5196 11.9998 19.2652 11.9998 19V10C11.9998 9.73478 11.8945 9.48043 11.7069 9.29289C11.5194 9.10536 11.265 9 10.9998 9C10.7346 9 10.4802 9.10536 10.2927 9.29289C10.1052 9.48043 9.99982 9.73478 9.99982 10Z" fill="currentColor" />
                <path d="M15 13V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8947 19.5196 17 19.2652 17 19V13C17 12.7348 16.8947 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z" fill="currentColor" />
                <path d="M20.0002 8.99988V18.9999C20.0002 19.2651 20.1055 19.5194 20.2931 19.707C20.4806 19.8945 20.735 19.9999 21.0002 19.9999C21.2654 19.9999 21.5198 19.8945 21.7073 19.707C21.8948 19.5194 22.0002 19.2651 22.0002 18.9999V8.99988C22.0002 8.73466 21.8948 8.48031 21.7073 8.29277C21.5198 8.10523 21.2654 7.99988 21.0002 7.99988C20.735 7.99988 20.4806 8.10523 20.2931 8.29277C20.1055 8.48031 20.0002 8.73466 20.0002 8.99988Z" fill="currentColor" />
                <path d="M5.99985 8.99992C6.26504 8.99986 6.51936 8.89447 6.70685 8.70692L10.2928 5.12092C10.4834 4.93934 10.7366 4.83806 10.9998 4.83806C11.2631 4.83806 11.5162 4.93934 11.7068 5.12092L13.8788 7.29292C14.4414 7.85533 15.2044 8.17128 15.9998 8.17128C16.7953 8.17128 17.5583 7.85533 18.1208 7.29292L23.7068 1.70692C23.889 1.51832 23.9898 1.26571 23.9875 1.00352C23.9852 0.741321 23.8801 0.490508 23.6947 0.3051C23.5093 0.119692 23.2584 0.0145233 22.9962 0.0122448C22.7341 0.00996641 22.4814 0.110761 22.2928 0.292919L16.7068 5.87792C16.5193 6.06539 16.265 6.17071 15.9998 6.17071C15.7347 6.17071 15.4804 6.06539 15.2928 5.87792L13.1208 3.70692C12.5583 3.14451 11.7953 2.82856 10.9998 2.82856C10.2044 2.82856 9.44143 3.14451 8.87885 3.70692L5.29285 7.29292C5.15304 7.43277 5.05783 7.61093 5.01926 7.80489C4.9807 7.99884 5.0005 8.19987 5.07617 8.38257C5.15184 8.56527 5.27998 8.72144 5.44439 8.83132C5.6088 8.94121 5.8021 8.99988 5.99985 8.99992Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_403_3234">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Add: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_403_2998)">
                <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22ZM17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8.00001C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7.00001 12.2652 7.00001 12C7.00001 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8.00001 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_403_2998">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    AddSolid: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_406_2183)">
                <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8.00001C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7.00001 12.2652 7.00001 12C7.00001 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8.00001 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_406_2183">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>

    ),
    Sales: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_403_2825)">
                <path d="M23 11C22.7348 11 22.4805 11.1054 22.2929 11.2929C22.1054 11.4804 22 11.7348 22 12C22.0082 14.3253 21.2084 16.5812 19.7376 18.3822C18.2667 20.1831 16.216 21.4173 13.9359 21.8738C11.6559 22.3303 9.28807 21.9807 7.23721 20.8849C5.18636 19.789 3.57977 18.0148 2.69206 15.8657C1.80435 13.7165 1.69064 11.3257 2.37035 9.10201C3.05006 6.87828 4.48099 4.95966 6.41858 3.67407C8.35616 2.38849 10.6801 1.81575 12.9932 2.05377C15.3062 2.29179 17.4648 3.32578 19.1 4.979C19.0671 4.98797 19.0337 4.99498 19 5H16C15.7348 5 15.4805 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6C15 6.26522 15.1054 6.51957 15.2929 6.70711C15.4805 6.89464 15.7348 7 16 7H19C19.7957 7 20.5587 6.68393 21.1213 6.12132C21.684 5.55871 22 4.79565 22 4V1C22 0.734784 21.8947 0.48043 21.7071 0.292893C21.5196 0.105357 21.2652 0 21 0C20.7348 0 20.4805 0.105357 20.2929 0.292893C20.1054 0.48043 20 0.734784 20 1V3.065C17.9526 1.23453 15.3389 0.162166 12.5959 0.0271026C9.85281 -0.107961 7.14648 0.702457 4.92911 2.32293C2.71174 3.94341 1.11766 6.27578 0.413253 8.9303C-0.291156 11.5848 -0.0632278 14.4007 1.05895 16.9074C2.18113 19.414 4.12958 21.4596 6.57871 22.7024C9.02784 23.9451 11.8293 24.3097 14.5149 23.7353C17.2006 23.1608 19.6077 21.682 21.3341 19.5461C23.0605 17.4101 24.0015 14.7464 24 12C24 11.7348 23.8947 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11Z" fill="currentColor" />
                <path d="M12.0002 6C11.735 6 11.4806 6.10536 11.2931 6.29289C11.1055 6.48043 11.0002 6.73478 11.0002 7V12C11.0002 12.2652 11.1056 12.5195 11.2932 12.707L14.2932 15.707C14.4818 15.8892 14.7344 15.99 14.9966 15.9877C15.2588 15.9854 15.5096 15.8802 15.695 15.6948C15.8804 15.5094 15.9856 15.2586 15.9879 14.9964C15.9901 14.7342 15.8893 14.4816 15.7072 14.293L13.0002 11.586V7C13.0002 6.73478 12.8948 6.48043 12.7073 6.29289C12.5198 6.10536 12.2654 6 12.0002 6Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_403_2825">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>

    ),
    SignInBackground: (props: ImageProps) => (
        <Image src={Background} alt='' className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm" />
    ),
    Google: (props: IconProps) => (
        <svg version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" >
            <g><path d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z" fill="#4280EF" /><path d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z" fill="#34A353" /><path d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z" fill="#F6B704" /><path d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z" fill="#E54335" /></g></svg>
    )
}