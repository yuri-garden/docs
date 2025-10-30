import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.appShell}>
      {/* HERO */}
      <section className={styles.heroSection} id="intro">
        {/* Left text block */}
        <div className={styles.heroTextBlock}>
          <div className={styles.heroEyebrow}>
            <span>🌸 Chào mừng!</span>
            <span className={styles.heroCardPill}>Yuri Garden</span>
          </div>

          <h1 className={styles.heroTitle}>
            Tất cả hướng dẫn cho người đọc và nhóm dịch, ở cùng một nơi.
          </h1>

          <p className={styles.heroDesc}>
            Đây là trang hướng dẫn chính thức của Yuri Garden. Bạn sẽ tìm thấy
            các hướng dẫn của web, cách upload chapter, quy tắc cộng đồng, và
            các câu hỏi thường gặp.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.ctaBtn} href="/docs/intro">
              Bắt đầu ngay →
            </a>
            <a className={styles.heroSecondaryBtn} href="/faq/intro">
              Câu hỏi thường gặp
            </a>
          </div>
        </div>

        {/* Right card highlight */}
        <div className={styles.heroCard}>
          <div className={styles.heroBgBubble}></div>

          <div className={styles.heroCardTitle}>
            <span>📖 Hướng dẫn đăng truyện</span>
            <span className={styles.heroCardPill}>Reader mode</span>
          </div>

          <div className={styles.heroCardContent}>
            - Cách đăng truyện/Lấy quyền đăng truyện. <br />
            - Cách upload Chapter. <br />
            - Cách đặt tên Chapter. <br />
            <br />
            <a className={styles.cardLink} href="/docs/intro">
              Xem chi tiết <span className={styles.cardArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className={styles.quickStartSection} id="quick-start">
        <div className={styles.sectionHeadingRow}>
          <div className={styles.sectionTitle}>Bắt đầu nhanh</div>
          <div className={styles.sectionDesc}>
            Những gì bạn cần biết để bắt đầu sử dụng Yuri Garden.
          </div>
        </div>

        <div className={styles.quickStartGrid}>
          {/* Card 1 */}
          <div className={styles.cardItem} id="reader">
            <div className={styles.cardIcon}>📚</div>
            <div className={styles.cardTitle}>Hướng dẫn sử dụng</div>
            <div className={styles.cardText}>
              Hướng dẫn lấy quyền đăng truyện, cách upload Chapter, cách đặt tên
              Chapter.
            </div>
            <a className={styles.cardLink} href="/docs/intro">
              Mở hướng dẫn <span className={styles.cardArrow}>→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className={styles.cardItem} id="uploader">
            <div className={styles.cardIcon}>🛡️</div>
            <div className={styles.cardTitle}>Các chính sách</div>
            <div className={styles.cardText}>
              Các chính sách của Yuri Garden. Các quy định về đăng truyện, quy
              tắc cộng đồng, chính sách bảo mật vả điều khoảng sử đụng và các
              vấn đề khác.
            </div>
            <a className={styles.cardLink} href="/policy/upload-rule">
              Xem từng bước <span className={styles.cardArrow}>→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className={styles.cardItem} id="faq">
            <div className={styles.cardIcon}>❓</div>
            <div className={styles.cardTitle}>Câu hỏi thường gặp</div>
            <div className={styles.cardText}>
              Những câu hỏi thường gặp về Yuri Garden. Các câu hỏi thường gặp về
              truyện, chapter, upload, và các vấn đề khác.
            </div>
            <a className={styles.cardLink} href="/faq/intro">
              Đọc câu trả lời <span className={styles.cardArrow}>→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className={styles.cardItem} id="uploader">
            <div className={styles.cardIcon}>📝</div>
            <div className={styles.cardTitle}>Change Log</div>
            <div className={styles.cardText}>
              Các thay đổi gần đây trên Yuri Garden. Các phiên bản cập nhật và
              thay đổi của web.
            </div>
            <a className={styles.cardLink} href="/changeLog/intro">
              Xem từng bước <span className={styles.cardArrow}>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Tài liệu ${siteConfig.title}`}
      description={`Tài liệu và hướng dẫn sử dụng ${siteConfig.title}`}
      wrapperClassName="homepage"
    >
      <HomepageHeader />
    </Layout>
  );
}
