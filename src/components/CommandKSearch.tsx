import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Docusaurus sẽ ánh xạ '@theme/SearchBar' sang search bar của plugin local-search
// hoặc algolia nếu bạn dùng algolia. Vậy import này hoạt động cho cả 2.
import SearchBar from "@theme/SearchBar";

export default function CommandKSearch() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Lắng nghe Ctrl/Cmd + K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isCmdK = isMac
        ? e.metaKey && e.key.toLowerCase() === "k"
        : e.ctrlKey && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  // Focus input search ngay khi mở
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => {
      const el = overlayRef.current?.querySelector(
        "input"
      ) as HTMLInputElement | null;
      console.log("el", el);

      el?.focus();
    }, 0);
    return () => window.clearTimeout(id);
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="cmdk-overlay"
      onMouseDown={(e) => {
        // click ra ngoài để đóng
        if (e.target === e.currentTarget) setOpen(false);
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="cmdk-modal" role="document">
        {/* Bạn có thể đặt một tiêu đề nhỏ */}
        <div className="cmdk-header">
          <span className="cmdk-title">Tìm kiếm</span>
          <button
            className="cmdk-close"
            onClick={() => setOpen(false)}
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>
        {/* SearchBar của Docusaurus (được plugin local-search override) */}
        <SearchBar />
        <div className="cmdk-hint">
          Mẹo: Nhấn <kbd>Esc</kbd> để đóng
        </div>
      </div>
    </div>,
    document.body
  );
}
