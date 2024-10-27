import { IconProps } from "../utils/types";

const Rocket: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    // Color variables
    const colors = {
        s0: '#eb201a',
        s1: '#000072',
        s2: '#fefefe',
        s3: '#ffffff',
        s4: '#371a45',
        s5: '#c0c9cc',
        s6: '#35bbef',
        s7: '#aee6ff',
        s8: '#ffcf02',
    };

    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 3000" className={className} height={svgSize} width={svgSize}>
            <defs>
                <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(889.351,-884.645,601.22,604.419,-574.93,2370.629)">
                    <stop offset="0" stopColor={colors.s0} />
                    <stop offset=".997" stopColor="#ef7d30" />
                </linearGradient>
            </defs>
            <g id="Layer 1">
                <g>
                    <g>
                        <path fill={colors.s0} d="m1227.3 842.3l-59.5 102.1-276.2 473.9c0 0-114 2.2-221.2 2.3-86.7 0-169-1.4-183.2-6.7-43.7-16.1-125.1-133.5 134.8-325.8 259.9-192.3 605.3-245.8 605.3-245.8z" />
                        <path fill={colors.s1} opacity={0.2} d="m1150.4 920.2l17.4 24.2-276.2 473.9c0 0-114 2.2-221.2 2.3 151.5-28.5 178.6-151.2 178.6-151.2 176.3-269.5 301.4-349.2 301.4-349.2z" />
                        <path fill={colors.s2} opacity={0.6} d="m1227.3 842.3l-30.3 52c-103.5 22-356.4 87.6-557.9 236.7-155.7 115.2-188.9 203.6-181.1 259.3-33.7-45.5-41-150.6 164-302.2 259.9-192.3 605.3-245.8 605.3-245.8z" />
                        <path fill={colors.s0} d="m1932.7 2365.8c-185.6 264.8-305 186.4-322.3 143.1-6.9-17.3-10.6-137.3-12.6-242-1.6-86.2-2-162.2-2-162.2l567.2-350.3c0 0-6.2 48.4-23.7 122.8-29.4 124.8-90.3 322.8-206.6 488.6z" />
                        <path fill={colors.s1} opacity={0.2} d="m2137.9 1874.7c-50.1 28-287.6 166.7-405.1 345.2 0 0-76-11.7-136.4 44.4-1.6-86.2-2-162.1-2-162.1l567.2-350.3c0 0-6.2 48.4-23.7 122.8z" />
                        <path fill={colors.s3} d="m1561 2108.3c0 0-26.4 5.3-62.7 5.5-5.4 0.1-11.2 0-17-0.3-10.9-0.4-22.3-1.4-33.9-3.1-8.4-1.3-16.9-2.9-25.4-5l-529.7-516.3c-1.7-6.4-3.2-12.8-4.5-19.2-4.7-23.9-6-47.1-5.9-66.7q0-1.7 0-3.5c0.4-29.3 4-49.5 4-49.5 68.4-450.6 706.7-1073.5 1301.2-1178.7 139.4-24.7 276.4-20.9 403.1 20.3l0.3 0.1c16.4 5.4 31.4 13.8 44.4 24.6 4.2 3.5 8.2 7.3 12 11.4 10.3 11 18.8 23.8 25 37.9q1.9 4.4 3.5 8.9c44.5 125.7 51.9 262.7 30.7 402.8-89.9 597-696.4 1250.9-1145.1 1330.8z" />
                        <path fill={colors.s4} opacity={0.3} d="m2381.6 1113.1c-98.4 101-278.1 85.5-401.3-34.5-37.7-36.8-65.8-79.1-83.7-123-40.6-99.5-29.4-207.3 38.9-277.3 22.9-23.6 50.3-40.7 80.3-51.8h-0.1 0.2q6.6-2.5 13.3-4.5l59.7-19.9c86.7-33.9 200.2-7.7 283.9 73.8 83.6 81.6 112.7 194.4 81 281.9l-18.4 60.2q-1.8 6.8-4.1 13.5v0.1c-10.3 30.2-26.8 58-49.7 81.5z" />
                        <path fill={colors.s0} d="m1546.3 2082.5c-13.4 13.8-29.6 24.2-48 31.3-22.8 0.1-49.7-1.8-76.3-8.4l-529.7-516.3c-8.7-31.8-10.7-64-10.4-89.4 6.5-14.7 15.2-27.9 26.3-39.3 91.4-93.7 308.4-30.5 484.6 141.3 176.2 171.8 244.9 387 153.5 480.8z" />
                        <path fill={colors.s4} opacity={0.2} d="m1821 1272.8c0 0-84.2 309.1-363.6 533.7l-51-54.5" />
                        <path fill={colors.s0} d="m2706.1 777.5q0 0 0 0c-17.5-116.8-78.3-237.4-179-335.6-100.7-98.2-222.8-155.9-340-170.4 139.5-24.7 276.6-20.8 403.4 20.4 39.6 12.9 71 43.6 84.9 82.8 44.5 125.7 51.9 262.7 30.7 402.8z" />
                        <path fill={colors.s4} opacity={0.3} d="m2381.6 1113.1c-98.4 101-278.1 85.5-401.3-34.5-37.7-36.8-65.8-79.1-83.7-123-40.6-99.5-29.4-207.3 38.9-277.3 22.9-23.6 50.3-40.7 80.3-51.8h-0.1 0.2q6.6-2.5 13.3-4.5l59.7-19.9c86.7-33.9 200.2-7.7 283.9 73.8 83.6 81.6 112.7 194.4 81 281.9l-18.4 60.2q-1.8 6.8-4.1 13.5v0.1c-10.3 30.2-26.8 58-49.7 81.5z" />
                        <path fill={colors.s0} d="m2706.1 777.5q0 0 0 0c-17.5-116.8-78.3-237.4-179-335.6-100.7-98.2-222.8-155.9-340-170.4 139.5-24.7 276.6-20.8 403.4 20.4 39.6 12.9 71 43.6 84.9 82.8 44.5 125.7 51.9 262.7 30.7 402.8z" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Rocket;