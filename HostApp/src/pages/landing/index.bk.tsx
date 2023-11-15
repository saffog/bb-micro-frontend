// import React, { useEffect, useRef } from "react";
// import { mount } from "landingApp/landingAppIndex";
// import { useLocation, useNavigate } from "react-router-dom";
// import { landingAppPrefix } from "../../constants/routes.constant";

// const LandingBaseName = `/${landingAppPrefix}`;

// export default () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Listen to navigation events dispatched inside appLanding mfe.
//   useEffect(() => {
//     const appLandingNavigationEventHandler = (event: Event) => {
//       const pathname = (event as CustomEvent<string>).detail;
//       const newPathname = `${LandingBaseName}${pathname}`;
//       if (newPathname === location.pathname) {
//         return;
//       }
//       navigate(newPathname);
//     };
//     window.addEventListener("[appLanding] navigated", appLandingNavigationEventHandler);

//     return () => {
//       window.removeEventListener(
//         "[appLanding] navigated",
//         appLandingNavigationEventHandler
//       );
//     };
//   }, [location]);

//   // Listen for shell location changes and dispatch a notification.
//   useEffect(
//     () => {
//       if (location.pathname.startsWith(LandingBaseName)) {
//         window.dispatchEvent(
//           new CustomEvent("[shell] navigated", {
//             detail: location.pathname.replace(LandingBaseName, ""),
//           })
//         );
//       }
//     },
//     [location],
//   );

//   const isFirstRunRef = useRef(true);
//   const unmountRef = useRef(() => {});
//   // Mount appLanding MFE
//   useEffect(
//     () => {
//       if (!isFirstRunRef.current) {
//         return;
//       }
//       unmountRef.current = mount({
//         mountPoint: wrapperRef.current!,
//         initialPathname: location.pathname.replace(
//           LandingBaseName,
//           ''
//         ),
//       });
//       isFirstRunRef.current = false;
//     },
//     [location],
//   );

//   useEffect(() => unmountRef.current, []);

//   return <div ref={wrapperRef} id="appLanding-mfe" />;
// };