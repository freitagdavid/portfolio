export function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}

// export const hasScrollbar = function() {
//     // The Modern solution
//     if (typeof window.innerWidth === "number")
//         return window.innerWidth > document.documentElement.clientWidth;

//     // rootElem for quirksmode
//     var rootElem = document.documentElement || document.body;

//     // Check overflow style property on body for fauxscrollbars
//     var overflowStyle;

//     if (typeof rootElem.currentStyle !== "undefined")
//         overflowStyle = rootElem.currentStyle.overflow;

//     overflowStyle =
//         overflowStyle || window.getComputedStyle(rootElem, "").overflow;

//     // Also need to check the Y axis overflow
//     var overflowYStyle;

//     if (typeof rootElem.currentStyle !== "undefined")
//         overflowYStyle = rootElem.currentStyle.overflowY;

//     overflowYStyle =
//         overflowYStyle || window.getComputedStyle(rootElem, "").overflowY;

//     var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
//     var overflowShown =
//         /^(visible|auto)$/.test(overflowStyle) ||
//         /^(visible|auto)$/.test(overflowYStyle);
//     var alwaysShowScroll =
//         overflowStyle === "scroll" || overflowYStyle === "scroll";

//     return (contentOverflows && overflowShown) || alwaysShowScroll;
// };
