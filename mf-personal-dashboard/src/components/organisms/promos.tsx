import React, { useEffect, useRef } from "react";
import { mount } from "marketingApp/promos"

export const Promos = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);   
  return <div id="mf-marketing" ref={ref}/>;
};